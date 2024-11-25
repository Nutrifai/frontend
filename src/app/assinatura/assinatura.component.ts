import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';

@Component({
  selector: 'app-assinatura',
  standalone: true,
  imports: [HeaderComponent, HeaderGeralComponent, HeaderComponent],
  templateUrl: './assinatura.component.html',
  styleUrl: './assinatura.component.css'
})
export class AssinaturaComponent {

}
