import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent {
  constructor(private userService: UserService) {}

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
}
