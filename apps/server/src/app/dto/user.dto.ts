import { ROLE } from '@authorization-app/libs';

export interface UpdateUserDto {
  username?: string;
  password?: string;
  roles?: ROLE[];
}

export interface CreateUserDto {
  username: string;
  password: string;
  roles: ROLE[];
}
