import { Component, OnInit } from '@angular/core';
import { DatepickerTouchExampleComponent } from "../datepicker-touch-example/datepicker-touch-example.component";
import { HttpClient } from '@angular/common/http';
import { DialogAnimationsExample, DialogAnimationsExampleDialog } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-select-nutri',
  standalone: true,
  imports: [DatepickerTouchExampleComponent, DialogAnimationsExample, DialogAnimationsExampleDialog],
  templateUrl: './select-nutri.component.html',
  styleUrl: './select-nutri.component.css'
})
export class SelectNutriComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('Componente SelectNutri inicializado!');
  }

  getAllNutritionist() {
    this.http.get("").subscribe((res:any)=>{

    })
  }
}

export interface Nutritionist{
  
}