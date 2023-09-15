import { ROLE } from '../auth/guards/roles/role.enum';

export interface UpdateUserDto {
  username?: string;
  password?: string;
}

export interface CreateUserDto {
  username: string;
  password: string;
  roles: ROLE[];
}
