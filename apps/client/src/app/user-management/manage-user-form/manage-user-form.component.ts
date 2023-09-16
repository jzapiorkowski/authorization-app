import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-manage-user-form',
  templateUrl: './manage-user-form.component.html',
  styleUrls: ['./manage-user-form.component.scss'],
})
export class ManageUserFormComponent {
  constructor(private userService: UserService) {}

  @Input() userId!: string;

  @Input() username!: string;
  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      const { password } = this.form.value;

      this.userService.changePassword(this.userId, password).subscribe(() => {
        this.form.reset();
      });
    }
  }
}
