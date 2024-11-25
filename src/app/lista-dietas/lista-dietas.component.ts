import { HttpService } from '../service/http/http.service';
import { Component, inject, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-dietas',
  standalone: true,
  imports: [],
  templateUrl: './lista-dietas.component.html',
  styleUrl: './lista-dietas.component.css'
})
export class ListaDietasComponent implements OnInit {
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
