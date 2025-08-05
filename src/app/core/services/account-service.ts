import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http =inject(HttpClient);

  currentUser =  signal<User | null>(null);

  baseUrl : string ="https://dummyjson.com/";

  login(creds: any){
    return this.http.post<User>(this.baseUrl+"auth/login",creds).pipe(
      tap(user => {
        if(user){
          sessionStorage.setItem("user",JSON.stringify(user));
          this.currentUser.set(user);
      
        }
      })
    )
  }

  logout(){
    sessionStorage.removeItem("user");
    this.currentUser.set(null);
  }



}
