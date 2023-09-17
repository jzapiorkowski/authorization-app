import { ACCESS_TOKEN, EXPIRES_IN } from '@authorization-app/libs';

export interface LoginInputDto {
  username: string;
  password: string;
}

export interface LoginOutputDto {
  [ACCESS_TOKEN]: string;
  [EXPIRES_IN]: string;
}
