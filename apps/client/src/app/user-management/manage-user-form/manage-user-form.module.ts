import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserFormComponent } from './manage-user-form.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageUserFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [ManageUserFormComponent],
})
export class ManageUserFormModule {}
