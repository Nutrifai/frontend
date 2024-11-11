import { Component, inject, signal } from '@angular/core';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../service/http/http.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  httpService = inject(HttpService)
  formBuilder = inject(FormBuilder)
  router = inject(Router)

  userForm = this.formBuilder.group({
    userId: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  errorMessage = signal("")

  onSubmit(): void {
    if(this.userForm.invalid) {
      this.errorMessage.set("PREENCHE DIREITO PFF!")
      return
    }
    
    this.httpService.post("register", this.userForm.value).subscribe({
      next: (_) => this.router.navigate(["/diet"]),
      error: (e) => this.errorMessage.set(e.error["error_message"])
    })
  }
}
