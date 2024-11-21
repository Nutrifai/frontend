import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { DateTimeService } from '../select-nutri/date-time.service';

/** @title Datepicker touch UI */
@Component({
  selector: 'datepicker-touch-example',
  templateUrl: './datepicker-touch-example.component.html',
  styleUrl:'./datepicker-touch-example.component.css',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerTouchExampleComponent {
  constructor(private dateTimeService: DateTimeService) {}

  // Método para manipular a mudança de data
  onDateChange(event: any): void {
    const selectedDate = event.value; // Captura a data selecionada
    this.dateTimeService.setDate(selectedDate); // Armazena a data no serviço
    console.log('Data selecionada:', selectedDate); // Para depuração
  }
}