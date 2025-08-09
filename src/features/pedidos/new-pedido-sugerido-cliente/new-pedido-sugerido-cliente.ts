import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pedido-sugerido-cliente',
  imports: [],
  templateUrl: './new-pedido-sugerido-cliente.html',
  styleUrl: './new-pedido-sugerido-cliente.css'
})
export class NewPedidoSugeridoCliente {


private router = inject(Router);

  volver() {
    this.router.navigate(['/pedido-sugerido-clientes']);
  }

}
