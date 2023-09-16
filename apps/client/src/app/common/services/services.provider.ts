import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandlerService } from './global-error-handler.service';

export const servicesProviders = [
  { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
];
