import { Component, inject, OnInit } from '@angular/core';
import { DatepickerTouchExampleComponent } from "../datepicker-touch-example/datepicker-touch-example.component";
import { HttpClient } from '@angular/common/http';
import { DialogAnimationsExample, DialogAnimationsExampleDialog } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { HttpService } from '../service/http/http.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-select-nutri',
  standalone: true,
  imports: [DatepickerTouchExampleComponent, DialogAnimationsExample, DialogAnimationsExampleDialog],
  templateUrl: './select-nutri.component.html',
  styleUrl: './select-nutri.component.css'
})
export class SelectNutriComponent {
  httpService = inject(HttpService)

  constructor(private nutritionistList: UserService ){}

  onGet(): void {
    this.httpService.get("nutritionist").subscribe(
      (response) => {
        console.log("Retorno do GET:", response);
      },
      (error) => {
        console.error("Erro na requisição:", error);
      }
    );
  }  
}

export interface Nutritionist{
  
}