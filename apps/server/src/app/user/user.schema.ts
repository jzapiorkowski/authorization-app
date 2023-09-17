import { ROLE } from '@authorization-app/libs';
import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      enum: ROLE,
    },
  ],
});

export interface UserDocument extends Document {
  password: string;
  roles: ROLE[];
  username: string;
}
