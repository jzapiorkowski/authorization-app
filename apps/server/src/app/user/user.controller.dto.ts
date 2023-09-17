import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ROLE } from '@authorization-app/libs';

export class CreateUserRequestDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  roles: ROLE[];
}

export class UpdateUserDtoRequest {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  roles?: ROLE[];
}
