import {
  CreateUserRequestDto,
  ROLE,
  UserResponseDto,
} from '@authorization-app/libs';
import { Injectable } from '@angular/core';
import { JwtService } from '../../core/auth/jwt/jwt.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService, private http: HttpClient) {}

  get getUserId(): string {
    return this.jwtService.decodeToken().sub;
  }

  get getUserUsername(): string {
    return this.jwtService.decodeToken().username;
  }

  get getPermissions(): ROLE[] {
    return this.jwtService.decodeToken().roles;
  }

  changePassword(userId: string, newPassword: string) {
    return this.http.put(`http://localhost:3000/user/update/${userId}`, {
      password: newPassword,
    });
  }

  get allUsers(): Observable<UserResponseDto[]> {
    return this.http
      .get<UserResponseDto[]>('http://localhost:3000/user')
      .pipe();
  }

  register({
    username,
    password,
    roles = [],
  }: CreateUserRequestDto): Observable<UserResponseDto> {
    return this.http.post<UserResponseDto>(
      'http://localhost:3000/user/signup',
      {
        username,
        password,
        roles,
      }
    );
  }
}
