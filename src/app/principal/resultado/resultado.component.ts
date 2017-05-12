import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  mensagem: string;
  fullPath: string;
  nome: string;

  acertos: number;
  nivel: number;

  constructor() { }

  ngOnInit() {
     this.acertos = +localStorage.getItem('acertos');
     this.nome = localStorage.getItem('nome');

     if (this.acertos < 3) {
       this.nivel = 3;
     }

     if (this.acertos >= 3 && this.acertos < 6) {
       this.nivel = 2;
     }

     if (this.acertos === 6) {
       this.nivel = 1;
     }
    
    switch(this.nivel){
      case 1:
        this.mensagem = "Parabéns "+ this.nome +"!";
        this.fullPath = "/assets/images/happy.jpg";
        break;
      case 2:
        this.mensagem = "Precisa melhorar "+ this.nome + "...";
        this.fullPath = "/assets/images/normal.png";
        break;
      case 3:
      this.mensagem = "Que feio " + this.nome +"!!!"
      this.fullPath = "/assets/images/sad.png";
      break;
    }
  }

}
