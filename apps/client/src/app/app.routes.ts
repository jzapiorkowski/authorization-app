import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-form/auth-form.module').then((m) => m.AuthFormModule),
  },
];
