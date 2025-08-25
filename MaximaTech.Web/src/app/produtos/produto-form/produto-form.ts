import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../../../services/produto.service';
import { Departamento, DepartamentoService } from '../../../services/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const UIkit: any;

@Component({
    selector: 'app-produto-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './produto-form.html',
    styleUrl: './produto-form.css'
})
export class ProdutoForm implements OnInit {
    produtoForm: FormGroup;
    id: string = "";
    departamentos: Departamento[] = [];

    constructor(
        private fb: FormBuilder,
        private produtoService: ProdutoService,
        private departamentoService: DepartamentoService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.produtoForm = this.fb.group({
            codigo: ['', Validators.required],
            descricao: ['', Validators.required],
            preco: [0, [Validators.required, Validators.min(0.01)]],
            status: [null, Validators.required],
            departamentoCodigo: ['', Validators.required]
        });

        this.departamentoService.getDepartamentos().subscribe({
            next: (dados) => this.departamentos = dados,
            error: () => UIkit.notification({
                message: 'Erro ao carregar os departamentos',
                status: 'danger',
                pos: 'bottom-center',
                timeout: 4000
            })
        });

        this.id = this.route.snapshot.paramMap.get('id') ?? "";
    }

    ngOnInit(): void {
        if (this.id) {
            this.produtoService.getProdutoById(this.id).subscribe({
                next: (produto) => {
                    this.produtoForm.patchValue(produto);
                }
            })
        }
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

    atualizar(): void {
        if (this.produtoForm.invalid || this.id == "")
            return;

        this.produtoService.updateProdutoById(this.id, this.produtoForm.value).subscribe({
            next: () => {
                UIkit.notification({
                    message: 'Produto atualizado com sucesso!',
                    status: 'success',
                    pos: 'bottom-center',
                    timeout: 3000
                });
                this.router.navigate(['/produtos']);
            },
            error: () => {
                UIkit.notification({
                    message: 'Erro ao atualizar produto',
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 4000
                });
            }
        })
    }
}
