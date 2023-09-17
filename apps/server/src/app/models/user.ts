import { UserResponseDto } from '@authorization-app/libs';
import Document from 'mongoose';

export interface User extends UserResponseDto, Document {
  password: string;
}
