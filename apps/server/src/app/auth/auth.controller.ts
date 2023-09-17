import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginResponseDto } from '@authorization-app/libs';
import { SignInDto } from './auth.controller.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  signIn(@Body() { username, password }: SignInDto): Promise<LoginResponseDto> {
    return this.authService.signIn({ username, password });
  }
}
