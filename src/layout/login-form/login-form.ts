import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../app/core/services/account-service';
import { LoginCreds } from '../../types/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  @Input() mode: 'mobile' | 'desktop' = 'desktop'; // para aplicar clases distintas

  private accountService = inject(AccountService);


  creds: LoginCreds = {
      username: '',
      password: ''
    };

  submitLogin()
  {
    this.accountService.login(this.creds).subscribe(
      {
        next: result => {
          console.log(result);
          //this.creds ={};
        },
        error: err => {
          alert(err.message);
        }
      }
    )
  }


}
