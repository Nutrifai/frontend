import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component';
import { HeaderGeralComponent } from '../../../header-geral/header-geral.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeaderGeralComponent
  ],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

}
