import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http/http.service';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrlRegister = 'https://0dpi6c64oh.execute-api.sa-east-1.amazonaws.com/api/register';
  private apiUrlLogin = 'https://imzdqi9zt7.execute-api.sa-east-1.amazonaws.com/api/login';
  httpService = inject(HttpService);
  userIsLoggedIn = false

  constructor(private http: HttpClient) {
    this.userIsLoggedIn = (window.localStorage.getItem("loggedIn") || "false") == "true"
  }

  register(userId: string, email: string, password: string): Observable<any> {
    const body = { userId, email, password };
    return this.http.post(this.apiUrlRegister, body);
  }

  login(userForm: any): Observable<any> {  // Alterado para userId
    return this.httpService.post("login", userForm)
      .pipe(
        tap(() => {
          window.localStorage.setItem("loggedIn", "true")
          this.userIsLoggedIn = true
        }
      )
    )
  }
}
