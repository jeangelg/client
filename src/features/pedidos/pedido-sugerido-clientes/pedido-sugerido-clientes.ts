import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pedido-sugerido-clientes',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './pedido-sugerido-clientes.html',
  styleUrl: './pedido-sugerido-clientes.css'
})
export class PedidoSugeridoClientes {

private activatedRoute = inject(ActivatedRoute);

 private router = inject(Router);
  constructor() {
    console.log(this.activatedRoute);
  }
  
 isInNewView() {
    return this.router.url.includes('new-pedido-sugerido-cliente');
  }




}
