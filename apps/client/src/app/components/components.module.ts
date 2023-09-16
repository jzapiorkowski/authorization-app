import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginFormComponent, HomeComponent],
  exports: [LoginFormComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, AuthModule],
})
export class ComponentsModule {}
