import { IsNotEmpty, IsString } from 'class-validator';
import { SignInDto as SignInDtoInterface } from '@authorization-app/libs';

export class SignInDto implements SignInDtoInterface {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
