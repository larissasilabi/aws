import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResultadosModule } from './resultados/resultados.module';
import { PrincipalModule } from './principal/principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    PrincipalModule,
    ResultadosModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
