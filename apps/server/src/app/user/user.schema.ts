import { Schema } from 'mongoose';
import { ROLE } from '../auth/guards/roles/role.enum';

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
