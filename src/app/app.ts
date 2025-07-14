
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
 imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  private http = inject(HttpClient);

  protected title = 'Pokemon App';

  protected pokemones = signal<any>([]);


  ngOnInit(): void {
   this.http.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").subscribe({
    next: (response:any) => this.pokemones.set(response.results),
    error: error => console.log(error),
    complete: () => console.log('Completed the http request')
   });
  }

}
