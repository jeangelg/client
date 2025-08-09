import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Register } from '../features/register/register';
import { PedidoSugeridoClientes } from '../features/pedidos/pedido-sugerido-clientes/pedido-sugerido-clientes';
import { Component } from '@angular/core';
import { NewPedidoSugeridoCliente } from '../features/pedidos/new-pedido-sugerido-cliente/new-pedido-sugerido-cliente';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'app',
        pathMatch: 'full'
    },

    {
        path:'home',
        component: Home
    },
    {
        path:'register',
        component: Register
    },
   {
        path:'pedido-sugerido-clientes',
        component: PedidoSugeridoClientes,
        children: [
            {
            path:'new-pedido-sugerido-cliente',
            component: NewPedidoSugeridoCliente
            }
            
        ]
    }

];
