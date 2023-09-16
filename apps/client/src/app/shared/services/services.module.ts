import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@NgModule({
  providers: [UserService],
  imports: [CommonModule],
})
export class ServicesModule {}
