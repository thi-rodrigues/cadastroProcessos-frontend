import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Processo } from "src/app/model/processo";

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

  findUfs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ufs`);
  }

  findMunicipios(uf: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/municipios/${uf}`);
  }

  saveProcesso(processo: Processo): Observable<Processo> {
    return this.http.post<Processo>(`${this.baseUrl}/save`, processo);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }

  // atualizaraProcesso(processo: Processo): Observable<Processo> {
  //   return this.http.put<Processo>(`${this.baseUrl}/${processo.id}`, processo);
  // }

  // buscarProcessosPorId(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/${id}`);
  // }


}
