import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';
import { DATABASE_CONNECTION, USER_MODEL } from '../../constants';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(USER_MODEL, UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
