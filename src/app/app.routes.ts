import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Register } from '../features/register/register';

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
    }

];
