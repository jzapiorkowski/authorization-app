import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interfaces/user';
import { USER_MODEL } from '../../constants';

@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL) private readonly userModel: Model<User>) {}

  async findUser(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
