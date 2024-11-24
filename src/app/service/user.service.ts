import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http/http.service';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpService = inject(HttpService);
  userIsLoggedIn = false

  constructor() {
    this.userIsLoggedIn = (window.localStorage.getItem("loggedIn") || "false") == "true"
  }

  register(userId: string, email: string, password: string): Observable<any> {
    const body = { userId, email, password };
    return this.httpService.post('register', body);
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

  logout() {
    return this.httpService.post("logout", null)
  }
  
  nutritionist(){
    return this.httpService.get('nutritionist');
  }

}
