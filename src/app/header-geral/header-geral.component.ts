import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header-geral',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-geral.component.html',
  styleUrl: './header-geral.component.css'
})
export class HeaderGeralComponent {
  userService = inject(UserService)

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

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/inicio'])
    })
  }
}
