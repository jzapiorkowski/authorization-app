import { CreateUserDto } from './../dto/user.dto';
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from './jwt/jwt.service';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { TOKEN_EXPIRATION } from '../../constants';
import {
  ACCESS_TOKEN,
  EXPIRES_IN,
  LoginResponseDto,
  UserResponseDto,
} from '@authorization-app/libs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private bcryptService: BcryptService
  ) {}

  async signIn(username: string, password: string): Promise<LoginResponseDto> {
    try {
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
        [ACCESS_TOKEN]: await this.jwtService.generateToken(payload),
        [EXPIRES_IN]: TOKEN_EXPIRATION,
      };
    } catch {
      throw new InternalServerErrorException('Failed to log in');
    }
  }

  async signUp(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {
      const hashedPassword = await this.bcryptService.hashPassword(
        createUserDto.password
      );

      const { _id, roles, username } = await this.userService.createUser({
        ...createUserDto,
        password: hashedPassword,
      });

      return {
        _id,
        roles,
        username,
      };
    } catch {
      throw new InternalServerErrorException('Failed to register');
    }
  }
}
