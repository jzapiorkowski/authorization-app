import { ACCESS_TOKEN, EXPIRES_IN } from '../constants';

export interface LoginResponseDto {
  [ACCESS_TOKEN]: string;
  [EXPIRES_IN]: string;
}

export interface SignInDto {
  username: string;
  password: string;
}
