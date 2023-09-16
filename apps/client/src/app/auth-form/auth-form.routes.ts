import { Route } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

export const authFormRoutes: Route[] = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
];
