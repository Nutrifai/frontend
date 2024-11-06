import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { DietComponent } from './diet/diet.component';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';

export const routes: Routes = [
    { path: 'diet', component: DietComponent },
    { path: 'nutricionista', component: NutricionistaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'assinatura', component: AssinaturaComponent },
];
