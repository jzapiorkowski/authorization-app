import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { UserResponseDto } from '@authorization-app/libs';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss'],
})
export class AdminManagementComponent implements OnInit {
  users: UserResponseDto[] = [];
  isLoading = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.allUsers.subscribe((users: UserResponseDto[]) => {
      this.users = users;

      this.isLoading = false;
    });
  }
}
