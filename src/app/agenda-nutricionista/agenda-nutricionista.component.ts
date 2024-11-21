import { Component } from '@angular/core';
import { DatepickerTouchExampleComponent } from '../datepicker-touch-example/datepicker-touch-example.component';
import { RouterLink } from '@angular/router';
import { HeaderGeralComponent } from "../header-geral/header-geral.component";
import { SelectNutriComponent } from "../select-nutri/select-nutri.component";

@Component({
  selector: 'app-agenda-nutricionista',
  standalone: true,
  imports: [RouterLink, DatepickerTouchExampleComponent, HeaderGeralComponent, SelectNutriComponent],
  templateUrl: './agenda-nutricionista.component.html',
  styleUrl: './agenda-nutricionista.component.css'
})
export class AgendaNutricionistaComponent {

}
