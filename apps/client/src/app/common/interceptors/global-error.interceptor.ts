import { Injectable, NgZone } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog, private ngZone: NgZone) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error is intercept');
        console.error(error);

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

        return throwError(error);
      })
    );
  }
}
