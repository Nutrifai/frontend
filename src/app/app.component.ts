import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatTab } from '@angular/material/tabs';
import { MatHint } from '@angular/material/form-field';
import { MatCalendar } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatFormField, MatDatepicker,MatTab, MatHint, MatCalendar, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NutrifAI';
}
