import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../service/http/http.service';
import { JsonPipe } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FormsModule, ReactiveFormsModule, JsonPipe, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  httpService = inject(HttpService);
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  userService = inject(UserService)

  loginForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.minLength(1)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  errorMessage = signal("");

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage.set("Por favor, preencha todos os campos corretamente!");
      return;
    }

    this.userService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/diet'])
      },
      error: (e) => this.errorMessage.set(e.error["error_message"])
    })
  }
}
