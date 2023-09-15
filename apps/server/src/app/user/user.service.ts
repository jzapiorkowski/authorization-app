import { UpdateUserDto } from './../dto/user.dto';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interfaces/user';
import { USER_MODEL } from '../../constants';
import { CreateUserDto } from '../dto/user.dto';
import { Types } from 'mongoose';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL) private readonly userModel: Model<User>,
    private bcryptService: BcryptService
  ) {}

  async findUser(username: string): Promise<User | undefined> {
    try {
      return this.userModel.findOne({ username });
    } catch {
      throw new InternalServerErrorException('Failed to find user');
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      return this.userModel.create(createUserDto);
    } catch {
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async updateUser(updateUserDto: UpdateUserDto, id: string) {
    if (updateUserDto.password)
      updateUserDto.password = await this.bcryptService.hashPassword(
        updateUserDto.password
      );

    try {
      const _id = new Types.ObjectId(id);
      const result = await this.userModel.updateOne({ _id }, updateUserDto);

      if (result.modifiedCount === 0) {
        throw new NotFoundException('User not found');
      }

      return result;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update user');
    }
  }

  async getAllUsers(): Promise<User[] | undefined> {
    try {
      return this.userModel.find();
    } catch {
      throw new InternalServerErrorException('Failed to get users');
    }
  }
}
