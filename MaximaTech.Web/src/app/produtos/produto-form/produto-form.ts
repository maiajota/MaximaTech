import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../../../services/produto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const UIkit: any;

@Component({
    selector: 'app-produto-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './produto-form.html',
    styleUrl: './produto-form.css'
})
export class ProdutoForm {
    produtoForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private produtoService: ProdutoService,
        private router: Router
    ) {
        this.produtoForm = this.fb.group({
            codigo: ['', Validators.required],
            descricao: ['', Validators.required],
            preco: [0, [Validators.required, Validators.min(0.01)]],
            status: [null, Validators.required],
            departamentoCodigo: ['', Validators.required]
        });
    }

    post(): void {
        if (this.produtoForm.invalid)
            return;

        this.produtoService.createProduto(this.produtoForm.value).subscribe({
            next: () => {
                UIkit.notification({
                    message: 'Produto cadastrado com sucesso!',
                    status: 'success',
                    pos: 'bottom-center',
                    timeout: 3000
                });
                this.router.navigate(['/produtos']);
            },
            error: () => {
                UIkit.notification({
                    message: 'Erro ao cadastrar produto',
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 4000
                });
            }
        });
    }
}
