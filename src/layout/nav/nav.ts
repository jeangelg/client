import { Component, inject } from '@angular/core';
import { LoginForm } from '../login-form/login-form';
import { AccountService } from '../../app/core/services/account-service';


@Component({
  selector: 'app-nav',
  imports: [LoginForm ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'         
})
export class Nav {
  protected accountService = inject(AccountService);
  
  handleLogout() {
    this.accountService.logout();
  }


}
