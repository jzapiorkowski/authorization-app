import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.generateToken(payload),
    };
  }
}