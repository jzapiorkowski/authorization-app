import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatDialogModule],
  exports: [MatInputModule, MatButtonModule, MatCardModule, MatDialogModule],
})
export class MaterialModule {}
