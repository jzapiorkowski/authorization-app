import { ACCESS_TOKEN } from './../../../../contants';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  get getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN)!;
  }

  decodeToken(): any {
    try {
      return jwt_decode(this.getToken);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }
}
