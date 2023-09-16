import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from '../dto/signIn.dto';
import { CreateUserDto } from '../dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() { username, password }: SignInDto) {
    if (!username) {
      throw new BadRequestException('Username is required in the request.');
    }

    if (!password) {
      throw new BadRequestException('Password is required in the request.');
    }

    return this.authService.signIn(username, password);
  }

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.username) {
      throw new BadRequestException('Username is required in the request.');
    }

    if (!createUserDto.password) {
      throw new BadRequestException('Password is required in the request.');
    }

    return this.authService.signUp(createUserDto);
  }
}
