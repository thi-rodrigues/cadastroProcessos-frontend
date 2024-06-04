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

  findAllProcessos(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}`);
  }

  findUfs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ufs`);
  }

  findMunicipios(uf: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/municipios/${uf}`);
  }

  saveProcesso(processo: Processo, file: File): Observable<Processo> {
    const formData = new FormData();
    formData.append('processo', JSON.stringify(processo));
    formData.append('file', file);
    return this.http.post<Processo>(`${this.baseUrl}/save`, formData);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/find/${id}`);
  }

  updateProcesso(processo: Processo, file: File): Observable<Processo> {
    const formData = new FormData();
    formData.append('processo', JSON.stringify(processo));
    formData.append('file', file);
    return this.http.put<Processo>(`${this.baseUrl}/update/${processo.id}`, formData);
  }

  viewProcesso(id: number): Observable<Processo> {
    return this.http.get<any>(`${this.baseUrl}/viewProcesso/${id}`);
  }

  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

}
