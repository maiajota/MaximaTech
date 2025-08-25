import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';

declare const UIkit: any;

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
				this.produtos = dados.filter(x => x.dataExclusao == null);
				this.loading = false;
			},
			error: () => {
				UIkit.notification({
                    message: 'Erro ao listar os produtos',
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 4000
                });
				this.loading = false;
			}
		});
	}

	deleteProduto(id?: string): void {
		if(!id)
			return;

		this.produtoService.deleteProdutoById(id).subscribe({
			next: () => {
				UIkit.notification({
                    message: 'Produto excluído com sucesso',
                    status: 'success',
                    pos: 'bottom-center',
                    timeout: 4000
                });
				this.produtos = this.produtos.filter(p => p.id !== id);
			},
			error: () => {
				UIkit.notification({
                    message: 'Erro ao deletar o produto',
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 4000
                });
			}
		});
	}
}
