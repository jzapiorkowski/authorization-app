import { Component } from '@angular/core';
import { AuthService } from '../../common/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  constructor(private authService: AuthService, private router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.authService
        .register(username, password)
        .subscribe(() => this.router.navigate(['/auth/login']));
    }
  }
}