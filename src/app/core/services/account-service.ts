import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
private http =inject(HttpClient);

baseUrl : string ="https://dummyjson.com/";

login(creds: any){
return this.http.post(this.baseUrl+"auth/login",creds);
}

}
