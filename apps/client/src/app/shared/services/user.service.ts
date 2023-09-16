import { Injectable } from '@angular/core';
import { JwtService } from '../../common/auth/jwt/jwt.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService, private http: HttpClient) {}

  get getUserId() {
    return this.jwtService.decodeToken().sub;
  }

  get getUserUsername() {
    return this.jwtService.decodeToken().username;
  }

  get getPermissions(): PERMISSION[] {
    return this.jwtService.decodeToken().roles;
  }

  changePassword(userId: string, newPassword: string) {
    return this.http.put(`http://localhost:3000/user/update/${userId}`, {
      password: newPassword,
    });
  }

  get allUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/user').pipe();
  }
}
