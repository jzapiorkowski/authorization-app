import { ACCESS_TOKEN, EXPIRES_AT } from './../../../contants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { shareReplay, tap } from 'rxjs';
import { UserService } from '../../shared/services/user/user.service';

interface LoginResponse {
  access_token: string;
  expiresIn: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .pipe(tap(this.setSession), shareReplay());
  }

  register(username: string, password: string, permissions: PERMISSION[] = []) {
    return this.http.post('http://localhost:3000/auth/signup', {
      username,
      password,
      roles: [...permissions, 'USER'],
    });
  }

  private setSession(authResult: LoginResponse) {
    const match = authResult.expiresIn.match(/^(\d+)h$/);
    const hours = parseInt(match![1], 10);
    const expiresIn = hours * 3600;

    const expiresAt = moment().add(expiresIn, 'second');

    localStorage.setItem(ACCESS_TOKEN, authResult.access_token);
    localStorage.setItem(EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(EXPIRES_AT);
  }

  isLoggedIn() {
    const expiresAt = this.getExpiration();

    return moment().isBefore(expiresAt);
  }

  private getExpiration() {
    const expiration = localStorage.getItem(EXPIRES_AT);
    const expiresAt = JSON.parse(expiration!);

    return moment(expiresAt);
  }

  hasPermission(requiredPermissions: PERMISSION[]): boolean {
    return this.userService.getPermissions.some((permission) =>
      requiredPermissions.includes(permission)
    );
  }
}
