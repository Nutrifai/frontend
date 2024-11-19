import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrlRegister = 'https://0dpi6c64oh.execute-api.sa-east-1.amazonaws.com/api/register';

  private apiUrlLogin = 'https://imzdqi9zt7.execute-api.sa-east-1.amazonaws.com/api/login';

  private apiUrlAgendaNutricionista = 'https://imzdqi9zt7.execute-api.sa-east-1.amazonaws.com/api/nutritionists';

  constructor(private http: HttpClient) {}

  register(userId: string, email: string, password: string): Observable<any> {
    const body = { userId, email, password };
    return this.http.post(this.apiUrlRegister, body);
  }

  login(userId: string, password: string): Observable<any> {  // Alterado para userId
    const body = { userId, password };  // Alterado para userId
    return this.http.post(this.apiUrlLogin, body);
  }

  nutritionist(){
    return this.http.get(this.apiUrlAgendaNutricionista);
  }

}
