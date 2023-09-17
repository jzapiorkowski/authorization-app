import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginResponseDto,
  SignInDto,
  UserResponseDto,
} from '@authorization-app/libs';
import { CreateUserDto } from '../dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() { username, password }: SignInDto): Promise<LoginResponseDto> {
    if (!username) {
      throw new BadRequestException('Username is required in the request.');
    }

    if (!password) {
      throw new BadRequestException('Password is required in the request.');
    }

    return this.authService.signIn(username, password);
  }

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    if (!createUserDto.username) {
      throw new BadRequestException('Username is required in the request.');
    }

    if (!createUserDto.password) {
      throw new BadRequestException('Password is required in the request.');
    }

    return this.authService.signUp(createUserDto);
  }
}
