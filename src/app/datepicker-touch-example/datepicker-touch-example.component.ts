import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { RouterLink } from '@angular/router';
 
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
export class DatepickerTouchExampleComponent {}