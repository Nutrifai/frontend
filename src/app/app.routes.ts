import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { DietComponent } from './diet/diet.component';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DietAiComponent } from './diet-ai/diet-ai.component';
import { AgendaNutricionistaComponent } from './agenda-nutricionista/agenda-nutricionista.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'diet', component: DietComponent },
    { path: 'forget_password', component: ForgetPasswordComponent },
    { path: 'nutricionista', component: NutricionistaComponent },
    { path: 'agenda_nutricionista', component: AgendaNutricionistaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'dietai', component: DietAiComponent },
    { path: 'assinatura', component: AssinaturaComponent },
    { path: '', redirectTo: '/agenda_nutricionista', pathMatch: 'full' }, // Redireciona para 'home' por padrão
    //{ path: '**', redirectTo: '/home' } // Captura rotas inválidas
];
