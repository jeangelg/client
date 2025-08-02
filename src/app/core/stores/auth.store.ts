import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private _loggedIn = signal(false);
  readonly loggedIn = this._loggedIn.asReadonly();

  login() {
    this._loggedIn.set(true);
  }

  logout() {
    this._loggedIn.set(false);
  }
  
}
