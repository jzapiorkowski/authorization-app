import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { PermissionGuard } from './permission.guard';

@NgModule({
  providers: [AuthService, AuthGuard, PermissionGuard],
  imports: [CommonModule, HttpClientModule],
})
export class AuthModule {}
