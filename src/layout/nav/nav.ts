import { Component } from '@angular/core';
import { LoginForm } from '../login-form/login-form';


@Component({
  selector: 'app-nav',
  imports: [LoginForm ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {


  loggedIn = false;

handleLogin(isLoggedIn: boolean) {
  this.loggedIn = isLoggedIn;
  console.log('Usuario logueado:', this.loggedIn);
}
}
