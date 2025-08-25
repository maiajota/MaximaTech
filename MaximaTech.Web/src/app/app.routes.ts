import { Routes } from '@angular/router';
import { ProdutoLista } from './produtos/produto-lista/produto-lista';
import { ProdutoForm } from './produtos/produto-form/produto-form';
import { Login } from './login/login';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'produtos', component: ProdutoLista },
    { path: 'produtos/cadastrar', component: ProdutoForm},
    { path: 'produtos/:id', component: ProdutoForm }
];
