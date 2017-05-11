import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  mensagem: string;
  fullPath: string;

  nivel: number = 2;

  constructor() { }

  ngOnInit() {
    // pegar o nivel
    // setar a mensagem
    switch(this.nivel){
      case 1:
        this.mensagem = "Parabéns!";
        this.fullPath = "/assets/images/happy.jpg";
        break;
      case 2:
        this.mensagem = "Precisa melhorar...";
        this.fullPath = "/assets/images/normal.png";
        break;
      case 3:
      this.mensagem = "Que feio."
      this.fullPath = "/assets/images/sad.png";
      break;
    }
  }

}
