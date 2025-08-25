import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';

export interface Produto {
  id?: string;
  codigo: string;
  descricao: string;
  preco: number;
  status: boolean;
  departamentoCodigo: string;
  dataCriacao: string,
  dataAtualizacao: string,
  dataExclusao?: string;
}

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private apiUrl = 'https://localhost:7113/api/produto';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProdutoById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  createProduto(produto: Produto): Observable<any> {
    return this.http.post(this.apiUrl, produto);
  }

  updateProdutoById(id: string, produto: Produto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, produto);
  }

  deleteProdutoById(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
