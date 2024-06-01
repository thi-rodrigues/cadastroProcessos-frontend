import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProcessoService {

  baseUrl = environment.baseUri + "/processo";

  constructor(
    private http: HttpClient
  ) {};

  buscarProcessos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  // criarProcesso(processo: Processo): Observable<Processo> {
  //   return this.http.post<Processo>(`${this.baseUrl}`, processo);
  // }

  // atualizaraProcesso(processo: Processo): Observable<Processo> {
  //   return this.http.put<Processo>(`${this.baseUrl}/${processo.id}`, processo);
  // }

  // buscarProcessosPorId(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/${id}`);
  // }

  // excluirProcessosPorId(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}/${id}`);
  // }

}
