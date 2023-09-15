import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { JwtModule } from './jwt/jwt.module';
import { BcryptModule } from '../bcrypt/bcrypt.module';

@Module({
  imports: [UserModule, JwtModule, BcryptModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
