import { Component, inject } from '@angular/core';
import { LoginForm } from '../login-form/login-form';
import { AuthStore } from '../../app/core/stores/auth.store';


@Component({
  selector: 'app-nav',
  imports: [LoginForm ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  authStore = inject(AuthStore);
  loggedIn = false;



  handleLogout() {
    this.authStore.logout();
  }


}
