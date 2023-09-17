import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { ACCESS_TOKEN } from '@authorization-app/libs';
@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private localStorageService: LocalStorageService) {}

  get token(): string {
    return this.localStorageService.getItem(ACCESS_TOKEN)!;
  }

  decodeToken(): any {
    try {
      return jwt_decode(this.token);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }
}
