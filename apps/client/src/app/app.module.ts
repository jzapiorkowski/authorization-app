import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { interceptorsProviders } from './common/interceptors/interceptors.providers';
import { servicesProviders } from './common/services/services.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ComponentsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [...interceptorsProviders, ...servicesProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
