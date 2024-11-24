import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

}
