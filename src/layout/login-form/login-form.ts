import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../app/core/services/account-service';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  @Input() mode: 'mobile' | 'desktop' = 'desktop'; // para aplicar clases distintas
  @Output() loggedIn = new EventEmitter<boolean>();

  private accountService = inject(AccountService);


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
          this.loggedIn.emit(true);
        },
        error: err => {
          alert(err.message);
          this.loggedIn.emit(false);
        }
      }
    )
  }


}
