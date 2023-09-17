import { ROLE } from '@authorization-app/libs';
import { Types } from 'mongoose';

export interface CreateUserInputDto {
  username: string;
  password: string;
  roles: ROLE[];
}

export interface UpdateUserInputDto {
  username?: string;
  password?: string;
  roles?: ROLE[];
}

export interface UserOutputDto {
  roles: ROLE[];
  username: string;
  _id: Types.ObjectId;
}

export interface UserOutputDto {
  roles: ROLE[];
  _id: Types.ObjectId;
  username: string;
}

export interface FindUserInputDto {
  password: string;
  _id?: string;
  username?: string;
}

export interface FindUserByUserNameOrIdInputDto {
  _id?: string;
  username?: string;
}

export interface FindUserByUserNameOrIdOutputDto {
  _id: Types.ObjectId;
  username: string;
  password: string;
  roles: ROLE[];
}

export interface GetUserInputDto {
  password: string;
  username: string;
}
