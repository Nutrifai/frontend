import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private apiDietPost = 'https://imzdqi9zt7.execute-api.sa-east-1.amazonaws.com/api/diets';

  constructor(private http: HttpClient) {}

  diets(alergia: string, altura: number, condicao_saude: string, idade: number, nivel_atividade: string, objetivo: string, peso: number, refeicoes_diarias: number, sexo: string): Observable<any> {
    const body = { idade, peso, altura, sexo, nivel_atividade, condicao_saude, alergia, refeicoes_diarias, objetivo };
    return this.http.post(this.apiDietPost, body);
  }
}
