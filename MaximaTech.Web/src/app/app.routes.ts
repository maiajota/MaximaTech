import { Routes } from '@angular/router';
import { ProdutoLista } from './produtos/produto-lista/produto-lista';
import { ProdutoForm } from './produtos/produto-form/produto-form';

export const routes: Routes = [
    { path: 'produtos', component: ProdutoLista },
    { path: 'produtos/cadastrar', component: ProdutoForm},
    { path: 'produtos/:id', component: ProdutoForm }
];
