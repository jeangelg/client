import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../app/core/services/account-service';
import { AuthStore } from '../../app/core/stores/auth.store';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  @Input() mode: 'mobile' | 'desktop' = 'desktop'; // para aplicar clases distintas

  private accountService = inject(AccountService);
  private authStore = inject(AuthStore);

  creds = {
    username: '',
    password: ''
  };

  submitLogin()
  {
    this.accountService.login(this.creds).subscribe(
      {
        next: result => {
          console.log(result);
          this.authStore.login();
        },
        error: err => {
          alert(err.message);
        }
      }
    )
  }


}
