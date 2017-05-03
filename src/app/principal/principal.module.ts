import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    PerguntasComponent,
    ResultadoComponent
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    PerguntasComponent,
    ResultadoComponent
  ]
})
export class PrincipalModule { }
