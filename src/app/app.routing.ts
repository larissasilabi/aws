import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoComponent } from './principal/resultado/resultado.component';
import { LoginComponent } from './principal/login/login.component';
import { PerguntasComponent } from './principal/perguntas/perguntas.component';
import { HomeComponent } from './principal/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'perguntas/:id', component: PerguntasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'resultado', component: ResultadoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);