import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  @Input() mode: 'mobile' | 'desktop' = 'desktop'; // para aplicar clases distintas
  @Output() loggedIn = new EventEmitter<boolean>();

  creds = {
    username: '',
    password: ''
  };

  submitLogin() {
    // Aquí puedes llamar a un servicio real
    if (this.creds.username === 'admin' && this.creds.password === '123') {
      this.loggedIn.emit(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }


}
