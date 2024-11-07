import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://0dpi6c64oh.execute-api.sa-east-1.amazonaws.com/api/register';

  constructor(private http: HttpClient) {}

  register(userId: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { userId, email, password };
    return this.http.post(this.apiUrl, body);
  }
}
