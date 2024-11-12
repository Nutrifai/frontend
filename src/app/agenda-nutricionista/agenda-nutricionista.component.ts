import { Component } from '@angular/core';
import { DatepickerTouchExampleComponent } from '../datepicker-touch-example/datepicker-touch-example.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agenda-nutricionista',
  standalone: true,
  imports: [RouterLink, DatepickerTouchExampleComponent],
  templateUrl: './agenda-nutricionista.component.html',
  styleUrl: './agenda-nutricionista.component.css'
})
export class AgendaNutricionistaComponent {

}
