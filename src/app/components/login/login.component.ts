import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login/login.service';
import { LoginResponse } from '../../services/login/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }
  tryLogin() {
    this.loginService.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.loginService.setToken(r.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
}