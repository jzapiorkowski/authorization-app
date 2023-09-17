import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../common/auth/auth.service';
import { ROLE } from '@authorization-app/libs';

@Component({
  selector: 'app-self-management',
  templateUrl: './self-management.component.html',
  styleUrls: ['./self-management.component.scss'],
})
export class SelfManagementComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  username!: string;

  ngOnInit(): void {
    this.username = this.userService.getUserUsername;
  }

  get userId(): string {
    return this.userService.getUserId;
  }

  get isAdmin(): boolean {
    return this.authService.hasPermission([ROLE.ADMIN]);
  }
}
