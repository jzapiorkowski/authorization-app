import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [ServicesModule, ComponentsModule],
  exports: [ServicesModule, ComponentsModule],
})
export class SharedModule {}
