import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  mensagem: string;

  nivel: number = 1;

  constructor() { }

  ngOnInit() {
    // pegar o nivel 
    // setar a mensagem
    switch(this.nivel){
      case 1:this.mensagem = "Parabéns!";
      case 2:this.mensagem = "Precisa melhorar...";
      case 3:this.mensagem = "Que feio."
    }
  }

}
