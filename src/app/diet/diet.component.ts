import { Component, inject, signal, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../service/http/http.service';
import { DatePipe, JsonPipe } from '@angular/common';

type alimento = {
  alimento: string,
  quantidade: string,
  calorias: string,
}

type meal = {
  refeicao: string,
  alimentos: alimento[],
  calorias: string
}

type dieta = {
  title: string,
  creationDate: string,
  goal: string,
  meals: meal[]
}

declare let $: any;

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink, FormsModule, ReactiveFormsModule, JsonPipe, DatePipe],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent implements OnInit{
  @ViewChild('modalDieta') modalDieta!: ElementRef; 
  @ViewChild('modalGerarDieta') modalGerarDieta!: ElementRef; 
  httpService = inject(HttpService)
  formBuilder = inject(FormBuilder)
  router = inject(Router)

  dietForm = this.formBuilder.group({
    idade: ['', [Validators.required]],
    peso: ['', [Validators.required]],
    altura: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    nivel_atividade: ['', [Validators.required]],
    condicao_saude: [''],
    alergia: [''],
    refeicoes_diarias: ['', [Validators.required]],
    objetivo: ['', [Validators.required]]
  })

  errorMessage = signal("")

  dietas = signal<dieta[]>([])
  dietaSelecionada = signal<dieta>({
    title: '',
    creationDate: '',
    goal: '',
    meals: []
  })

  onSubmit(): void {
    if (this.dietForm.invalid) {
      this.errorMessage.set("Por favor, preencha todos os campos corretamente!")
      return
    }

    console.log(this.dietForm)
    this.httpService.post<dieta>("diets", this.dietForm.value).subscribe({
      next: (dietaCriada) => {
        this.dietas.update(dietas => {
          dietas.push(dietaCriada)
          return dietas
        })

        $(this.modalGerarDieta.nativeElement).modal('hide')

        this.viewDiet(dietaCriada)
      },
      error: (e) => this.errorMessage.set(e.error["error_message"])
    })
  }
  
  ngOnInit(): void {
    this.fetchDietas()
  }

  fetchDietas() {
    this.httpService.get<dieta[]>("diets")
      .subscribe(response => this.dietas.set(response))
  }

  viewDiet(dieta: dieta) {
    this.dietaSelecionada.set(dieta)
    $(this.modalDieta.nativeElement).modal('show')
  }
}
