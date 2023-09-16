import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  providers: [AuthService, AuthGuard],
  imports: [CommonModule, HttpClientModule],
})
export class AuthModule {}
