import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderGeralComponent } from "../header-geral/header-geral.component";

@Component({
  selector: 'app-agenda-nutricionista',
  standalone: true,
  imports: [RouterLink, HeaderGeralComponent],
  templateUrl: './agenda-nutricionista.component.html',
  styleUrl: './agenda-nutricionista.component.css'
})
export class AgendaNutricionistaComponent {

}
