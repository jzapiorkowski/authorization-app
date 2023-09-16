import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  constructor(private userService: UserService) {}

  username!: string;
  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      const { password } = this.form.value;
      const userId = this.userService.getUserId;

      this.userService.changePassword(userId, password);
    }
  }

  ngOnInit(): void {
    this.username = this.userService.getUserUsername;
  }
}
