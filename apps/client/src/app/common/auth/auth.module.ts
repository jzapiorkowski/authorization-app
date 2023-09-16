import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  providers: [AuthService],
  imports: [CommonModule, HttpClientModule],
})
export class AuthModule {}
