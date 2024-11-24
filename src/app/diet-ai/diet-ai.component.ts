import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-diet-ai',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink],
  templateUrl: './diet-ai.component.html',
  styleUrl: './diet-ai.component.css'
})
export class DietAiComponent {
  httpService = inject(HttpService)
  dietas = signal<any[]>([])
  
  ngOnInit(): void {
    this.fetchDietas()
  }

  fetchDietas() {
    this.httpService.get<any[]>("diets")
      .subscribe(response => this.dietas.set(response))
  }
}
