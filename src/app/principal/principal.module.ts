import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PerguntasService } from './perguntas/perguntas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
  ],
  providers: [PerguntasService]
})
export class PrincipalModule { }
