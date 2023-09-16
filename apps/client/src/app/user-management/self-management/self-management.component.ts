import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user/user.service';
import { AuthService } from '../../common/auth/auth.service';

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
  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      const { password } = this.form.value;
      const userId = this.userService.getUserId;

      this.userService.changePassword(userId, password).subscribe(() => {
        this.form.reset;
      });
    }
  }

  ngOnInit(): void {
    this.username = this.userService.getUserUsername;
  }

  get isAdmin(): boolean {
    return this.authService.hasPermission(['ADMIN']);
  }
}
