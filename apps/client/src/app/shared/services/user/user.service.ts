import { Injectable } from '@angular/core';
import { JwtService } from '../../../common/auth/jwt/jwt.service';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}

  get getUserId() {
    return this.jwtService.decodeToken().sub;
  }

  get getUserUsername() {
    return this.jwtService.decodeToken().username;
  }
}
