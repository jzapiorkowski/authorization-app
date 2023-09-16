import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { shareReplay, tap } from 'rxjs';

interface LoginResponse {
  access_token: string;
  expiresIn: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .pipe(tap(this.setSession), shareReplay());
  }

  private setSession(authResult: LoginResponse) {
    const match = authResult.expiresIn.match(/^(\d+)h$/);
    const hours = parseInt(match![1], 10);
    const expiresIn = hours * 3600;

    const expiresAt = moment().add(expiresIn, 'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn() {
    const expiresAt = this.getExpiration();

    return moment().isBefore(expiresAt);
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);

    return moment(expiresAt);
  }
}
