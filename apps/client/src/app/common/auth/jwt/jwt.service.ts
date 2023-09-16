import { ACCESS_TOKEN } from './../../../../contants';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  decodeToken(): any {
    const token = localStorage.getItem(ACCESS_TOKEN)!;

    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }
}
