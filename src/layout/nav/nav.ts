import { Component, inject } from '@angular/core';
import { LoginForm } from '../login-form/login-form';
import { AccountService } from '../../app/core/services/account-service';
import { RouterOutlet } from '@angular/router';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [LoginForm,RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'         
})
export class Nav {
  protected accountService = inject(AccountService);
  
  handleLogout() {
    this.accountService.logout();
  }


}
