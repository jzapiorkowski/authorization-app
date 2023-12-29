import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../core/auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, MaterialModule, AuthModule],
})
export class ComponentsModule {}
