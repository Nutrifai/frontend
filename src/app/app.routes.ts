import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { DietComponent } from './diet/diet.component';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';
import { AgendaNutricionistaComponent } from './agenda-nutricionista/agenda-nutricionista.component';
import { ListaDietasComponent } from './lista-dietas/lista-dietas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'diet', component: DietComponent },
    { path: 'nutricionista', component: NutricionistaComponent },
    { path: 'agenda_nutricionista', component: AgendaNutricionistaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'assinatura', component: AssinaturaComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redireciona para 'home' por padrão
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' }, // Redireciona para 'home' por padrão
];
