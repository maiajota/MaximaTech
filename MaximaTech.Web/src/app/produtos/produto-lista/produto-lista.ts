import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-produto-lista',
	standalone: true,
	imports: [CommonModule],  
	templateUrl: './produto-lista.html',
	styleUrl: './produto-lista.css'
})
export class ProdutoLista implements OnInit {
	produtos: Produto[] = [];
	loading = true;

	constructor(private produtoService: ProdutoService) { }

	ngOnInit(): void {
		this.produtoService.getProdutos().subscribe({
			next: (dados) => {
				this.produtos = dados;
				this.loading = false;
			},
			error: (err) => {
				console.error('Erro ao carregar produtos', err);
				this.loading = false;
			}
		});
	}
}
