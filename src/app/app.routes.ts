import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { DietComponent } from './diet/diet.component';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'diet', component: DietComponent },
    { path: 'forget_password', component: ForgetPasswordComponent },
    { path: 'nutricionista', component: NutricionistaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'assinatura', component: AssinaturaComponent },
    //{ path: '', redirectTo: '/nutricionista', pathMatch: 'full' }, // Redireciona para 'home' por padrão
    //{ path: '**', redirectTo: '/home' } // Captura rotas inválidas
];
