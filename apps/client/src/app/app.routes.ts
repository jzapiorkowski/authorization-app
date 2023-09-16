import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './common/auth/auth.guard';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-form/auth-form.module').then((m) => m.AuthFormModule),
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
    canActivate: [AuthGuard],
  },
];
