import { ROLE } from '../constants';

export interface UserResponseDto {
  roles: ROLE[];
  _id: string;
  username: string;
}
