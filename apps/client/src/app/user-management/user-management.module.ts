import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { RouterModule } from '@angular/router';
import { userManagementRoutes } from './user-management.routes';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelfManagementComponent } from './self-management/self-management.component';

@NgModule({
  declarations: [UserManagementComponent, SelfManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userManagementRoutes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class UserManagementModule {}
