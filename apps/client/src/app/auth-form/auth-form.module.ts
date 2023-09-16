import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authFormRoutes } from './auth-form.routes';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(authFormRoutes),
  ],
  exports: [LoginFormComponent],
})
export class AuthFormModule {}
