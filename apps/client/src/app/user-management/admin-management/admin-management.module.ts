import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementComponent } from './admin-management.component';
import { RouterModule } from '@angular/router';
import { adminManagementRoutes } from './admin-management.routes';
import { ManageUserFormModule } from '../manage-user-form/manage-user-form.module';

@NgModule({
  declarations: [AdminManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminManagementRoutes),
    ManageUserFormModule,
  ],
})
export class AdminManagementModule {}
