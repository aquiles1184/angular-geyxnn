import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  logout(){
    console.log('logout - inicio');
    this.loginService.logout();
    console.log('logout - fin');
  }

}