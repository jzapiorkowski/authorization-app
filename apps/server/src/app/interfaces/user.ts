import Document from 'mongoose';
import { ROLE } from '../auth/guards/roles/role.enum';

export interface User extends Document {
  readonly username: string;
  readonly password: string;
  roles: ROLE[];
}
