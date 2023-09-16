import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, AuthModule],
})
export class ComponentsModule {}
