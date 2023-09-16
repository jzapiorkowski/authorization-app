import { Route } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

export const authFormRoutes: Route[] = [
  { path: 'login', component: LoginFormComponent },
];
