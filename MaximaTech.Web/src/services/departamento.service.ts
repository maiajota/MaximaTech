import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Departamento {
  codigo: string;
  descricao: string;
}

@Injectable({ providedIn: 'root' })
export class DepartamentoService {
  private apiUrl = 'https://localhost:7113/api/departamento';

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }
}
