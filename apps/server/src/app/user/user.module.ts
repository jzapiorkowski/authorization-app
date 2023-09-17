import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';
import { EncryptionModule } from '../utils/encryption/encryption.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [EncryptionModule, DatabaseModule],
  providers: [UserService, ...userProviders],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
