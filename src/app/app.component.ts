import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { DescubraComponent } from './descubra/descubra.component';
import { DietaComponent } from './dieta/dieta.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { RecursosComponent } from './recursos/recursos.component';
import { SaudavelComponent } from './saudavel/saudavel.component';
import { ServicoComponent } from './servico/servico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultaComponent, DescubraComponent, DietaComponent, FuncoesComponent, HeaderComponent, HomeComponent, InfosComponent, RecursosComponent, SaudavelComponent, ServicoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NutrifAI';
}
