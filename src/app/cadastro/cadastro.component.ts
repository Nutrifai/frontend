import { Component, inject } from '@angular/core';
import { HeaderGeralComponent } from '../header-geral/header-geral.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderGeralComponent, RouterLink, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private userService: UserService) {}
  
  onSubmit(): void {
    const userId = this.nome;
    const email = this.email;
    const password = this.senha;

    this.userService.register(userId, email, password).subscribe({
      next: (response) => {
        console.log('Sucesso!', response);
        alert('Cadastro realizado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao cadastrar', error);
        alert('Erro ao realizar o cadastro.');
      }
    });
  }
}
