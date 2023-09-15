import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from './jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findUser(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = {
      username: user.username,
    };

    return {
      access_token: await this.jwtService.generateToken(payload),
    };
  }
}
