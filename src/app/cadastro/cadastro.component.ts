import { Component } from '@angular/core';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
