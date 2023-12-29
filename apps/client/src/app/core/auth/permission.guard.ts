import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot) {
    const requiredPermissions = next.data['permissions'];

    if (!this.authService.hasPermission(requiredPermissions)) {
      return false;
    }

    return true;
  }
}
