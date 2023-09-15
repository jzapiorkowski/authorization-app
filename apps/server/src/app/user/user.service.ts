import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interfaces/user';
import { USER_MODEL } from '../../constants';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL) private readonly userModel: Model<User>) {}

  async findUser(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }
}
