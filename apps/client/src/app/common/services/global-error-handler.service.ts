import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private dialog: MatDialog, private ngZone: NgZone) {}

  handleError(error: any): void {
    this.ngZone.run(() => {
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
        data: {
          error: error?.message || 'Something went wrong',
        },
        maxWidth: '350px',
        position: {
          left: '150px',
          top: '20px',
        },
        role: 'alertdialog',
      });

      setTimeout(() => {
        dialogRef.close();
      }, 5000);
    });
  }
}
