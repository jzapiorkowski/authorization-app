import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  isLoggedIn = false;

  toLogin() {
    this.router.navigate(['auth/login']);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
