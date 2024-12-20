import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { DietComponent } from './diet/diet.component';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';
import { DietAiComponent } from './diet-ai/diet-ai.component';
import { AgendaNutricionistaComponent } from './agenda-nutricionista/agenda-nutricionista.component';
import { InicioComponent } from './inicio/inicio.component';
import { DatepickerTouchExampleComponent } from './datepicker-touch-example/datepicker-touch-example.component';
import { DialogAnimationsExample } from './select-nutri/dialog-animations-example-dialog/dialog-animations-example-dialog.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'diet', component: DietComponent },
    { path: 'nutricionista', component: NutricionistaComponent },
    { path: 'agenda_nutricionista', component: AgendaNutricionistaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'dietai', component: DietAiComponent },
    { path: 'assinatura', component: AssinaturaComponent },
    { path: 'dialog', component: DialogAnimationsExample },
    { path: 'datepicker', component: DatepickerTouchExampleComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redireciona para 'home' por padrão
];
