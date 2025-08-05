
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav";
import { AccountService } from './core/services/account-service';

@Component({
  selector: 'app-root',
 imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected title = 'Pokemon App';
  protected pokemones = signal<any>([]);


  ngOnInit(): void {
    this.setCurrentUser();
   this.http.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").subscribe({
    next: (response:any) => this.pokemones.set(response.results),
    error: error => console.log(error),
    complete: () => console.log('Completed the http request')
   });
  }

  setCurrentUser(){
    const userString = sessionStorage.getItem("user");
    if(!userString) return;

    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);

  }



}
