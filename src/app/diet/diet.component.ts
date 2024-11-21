import { Component, inject, signal } from '@angular/core';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../service/http/http.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
  httpService = inject(HttpService)
  formBuilder = inject(FormBuilder)
  router = inject(Router)

  dietForm = this.formBuilder.group({
    idade: ['', [Validators.required]],
    peso: ['', [Validators.required]],
    altura: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    nivel_atividade: ['', [Validators.required]],
    condicao_saude: ['', [Validators.required]],
    alergia: ['', [Validators.required]],
    refeicoes_diarias: ['', [Validators.required]],
    objetivo: ['', [Validators.required]]
  })

  errorMessage = signal("")

  onSubmit(): void {
    if (this.dietForm.invalid) {
      this.errorMessage.set("Por favor, preencha todos os campos corretamente!")
      return
    }

    console.log(this.dietForm)

    this.httpService.post("diets", this.dietForm.value).subscribe({
      next: (_) => this.router.navigate(["/inicio"]),
      error: (e) => this.errorMessage.set(e.error["error_message"])
    })
  }
}
