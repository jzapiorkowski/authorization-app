import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { PermissionGuard } from './permission.guard';
import { LocalStorageService } from '../local-storage/local-storage.service';

@NgModule({
  providers: [AuthService, AuthGuard, PermissionGuard, LocalStorageService],
  imports: [CommonModule, HttpClientModule],
})
export class AuthModule {}
