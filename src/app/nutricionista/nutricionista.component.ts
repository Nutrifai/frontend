import { Component } from '@angular/core';
import { HeaderGeralComponent } from "../header-geral/header-geral.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nutricionista',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink],
  templateUrl: './nutricionista.component.html',
  styleUrl: './nutricionista.component.css'
})
export class NutricionistaComponent {

}
