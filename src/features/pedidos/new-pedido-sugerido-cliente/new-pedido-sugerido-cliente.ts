import { Component, inject, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { InputText } from '../../../shared/input-text/input-text';

@Component({
  selector: 'app-new-pedido-sugerido-cliente',
  imports: [ReactiveFormsModule,InputText],
  templateUrl: './new-pedido-sugerido-cliente.html',
  styleUrl: './new-pedido-sugerido-cliente.css'
})
export class NewPedidoSugeridoCliente implements OnInit {

  private formBuilder = inject(FormBuilder)
  protected nuevoPedidoForm : FormGroup = new FormGroup({});
  private router = inject(Router);

  ngOnInit(): void {
    this.iniciaFormulario();
  }

  iniciaFormulario(){
    this.nuevoPedidoForm = new FormGroup({
    cuentaClave: new FormControl('', Validators.required),
    cliente: new FormControl('', Validators.required),
    clienteCodOpe: new FormControl('', Validators.required),
    codope: new FormControl('', Validators.required),
    centro: new FormControl('', Validators.required),
    glnProveedor: new FormControl('', Validators.required),
    glnSucursal: new FormControl('', Validators.required),
    ptAuto: new FormControl('no')
  });


  }


  volver() {
    this.router.navigate(['/pedido-sugerido-clientes']);
  }

}


