import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {LoginResponse} from './login-response'

const   TOKEN = 'TOKEN';

@Injectable()
export class LoginService {



  constructor(private http: HttpClient){}
  
  login(email: string, password: string): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

}