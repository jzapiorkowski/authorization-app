import { Route } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { SelfManagementComponent } from './self-management/self-management.component';
import { PermissionGuard } from '../common/auth/permission.guard';
import { ROLE } from '@authorization-app/libs';

export const userManagementRoutes: Route[] = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: '',
        component: SelfManagementComponent,
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin-management/admin-management.module').then(
            (m) => m.AdminManagementModule
          ),
        canActivate: [PermissionGuard],
        data: {
          permissions: [ROLE.ADMIN],
        },
      },
    ],
  },
];
