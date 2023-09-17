import { UpdateUserDto, CreateUserDto } from './../dto/user.dto';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from '../../constants';
import { Types } from 'mongoose';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { UserResponseDto } from '@authorization-app/libs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL) private readonly userModel: Model<User>,
    private bcryptService: BcryptService
  ) {}

  async findUser(username: string): Promise<User | undefined> {
    try {
      return this.userModel.findOne(
        { username },
        { _id: 1, username: 1, roles: 1, password: 1 }
      );
    } catch {
      throw new InternalServerErrorException('Failed to find user');
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      return this.userModel.create(createUserDto);
    } catch {
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async updateUser(updateUserDto: UpdateUserDto, id: string) {
    try {
      if (updateUserDto.password)
        updateUserDto.password = await this.bcryptService.hashPassword(
          updateUserDto.password
        );

      const _id = new Types.ObjectId(id);
      const result = await this.userModel.updateOne({ _id }, updateUserDto);

      return result;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update user');
    }
  }

  async getAllUsers(): Promise<UserResponseDto[]> {
    try {
      return this.userModel.find({}, { _id: 1, username: 1, roles: 1 });
    } catch {
      throw new InternalServerErrorException('Failed to get users');
    }
  }
}
