import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel, DropDownButtonModule} from '@syncfusion/ej2-angular-splitbuttons'

@Component({
  selector: 'app-header-geral',
  standalone: true,
  imports: [RouterLink, DropDownButtonModule],
  templateUrl: './header-geral.component.html',
  styleUrl: './header-geral.component.css'
})
export class HeaderGeralComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          window.scrollTo(0, element.offsetTop);  // Rolagem para o elemento com o ID do fragmento
        }
      }
    });
  }
}
