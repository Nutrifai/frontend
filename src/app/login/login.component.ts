import { Component } from '@angular/core';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderGeralComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
