import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { shareReplay, tap, Observable } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import {
  ACCESS_TOKEN,
  EXPIRES_AT,
  LoginResponseDto,
  ROLE,
  SignInDto,
} from '@authorization-app/libs';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  login({ username, password }: SignInDto): Observable<LoginResponseDto> {
    return this.http
      .post<LoginResponseDto>('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .pipe(
        tap((res) => this.setSession(res)),
        shareReplay()
      );
  }

  private setSession(authResult: LoginResponseDto): void {
    const match = authResult.expires_in.match(/^(\d+)h$/);
    const hours = parseInt(match![1], 10);
    const expiresIn = hours * 3600;

    const expiresAt = moment().add(expiresIn, 'second');

    this.localStorageService.setItem(ACCESS_TOKEN, authResult.access_token);
    this.localStorageService.setItem(
      EXPIRES_AT,
      JSON.stringify(expiresAt.valueOf())
    );
  }

  logout(): void {
    this.localStorageService.removeItem(ACCESS_TOKEN);
    this.localStorageService.removeItem(EXPIRES_AT);
  }

  isLoggedIn(): boolean {
    const expiresAt = this.getExpiration();

    return moment().isBefore(expiresAt);
  }

  private getExpiration() {
    const expiration = this.localStorageService.getItem(EXPIRES_AT);
    const expiresAt = JSON.parse(expiration!);

    return moment(expiresAt);
  }

  hasPermission(requiredPermissions: ROLE[]): boolean {
    return this.userService.getPermissions.some((permission: ROLE) =>
      requiredPermissions.includes(permission)
    );
  }
}
