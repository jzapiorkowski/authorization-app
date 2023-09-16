import { TOKEN_EXPIRATION } from './../../../constants';
import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';

@Module({
  imports: [
    NestJwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: TOKEN_EXPIRATION },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
