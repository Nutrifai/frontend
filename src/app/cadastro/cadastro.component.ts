import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../service/http/http.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  httpService = inject(HttpService)
  formBuilder = inject(FormBuilder)
  router = inject(Router)

  userForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  errorMessage = signal("")

  onSubmit(): void {
    if(this.userForm.invalid) {
      this.errorMessage.set("Por favor, preencha todos os campos corretamente!")
      return
    }
    
    this.httpService.post("register", this.userForm.value).subscribe({
      next: (_) => this.router.navigate(["/login"]),
      error: (e) => this.errorMessage.set(e.error["error_message"])
    })
  }
}
