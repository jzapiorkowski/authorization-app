import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';
import { BcryptModule } from '../bcrypt/bcrypt.module';

@Module({
  imports: [DatabaseModule, BcryptModule],
  providers: [UserService, ...userProviders],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
