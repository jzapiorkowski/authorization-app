import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthModule } from './auth/auth.module';
import { interceptorsProviders } from './interceptors/interceptors.providers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, AuthModule, BrowserAnimationsModule],
  providers: [LocalStorageService, ...interceptorsProviders],
  exports: [AuthModule],
})
export class CoreModule {}
