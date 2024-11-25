import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InfosComponent } from "../infos/infos.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [HeaderComponent, InfosComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
