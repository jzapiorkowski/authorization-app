import { CreateUserDto } from './../dto/user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from './jwt/jwt.service';
import { BcryptService } from './bcrypt/bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private bcryptService: BcryptService
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findUser(username);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordMatching = await this.bcryptService.checkPassword(
      password,
      user?.password
    );

    if (!isPasswordMatching) {
      throw new UnauthorizedException('Password is incorrect');
    }

    const payload = {
      //@ts-ignore
      sub: user._id.toHexString(),
      username: user.username,
      roles: user.roles,
    };

    return {
      access_token: await this.jwtService.generateToken(payload),
    };
  }

  async signUp(createUserDto: CreateUserDto) {
    const hashedPassword = await this.bcryptService.hashPassword(
      createUserDto.password
    );

    const result = await this.userService.createUser({
      ...createUserDto,
      password: hashedPassword,
    });

    return result;
  }
}
