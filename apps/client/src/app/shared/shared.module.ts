import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [ServicesModule],
  exports: [ServicesModule],
})
export class SharedModule {}
