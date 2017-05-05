import { routing } from './../../app.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  id: number = 1;

  perguntas: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.perguntas[0] = "O que é o serviço de AWS da Amazon?1";
    this.perguntas[1] = "O que é o serviço de AWS da Amazon?2";
    this.perguntas[2] = "O que é o serviço de AWS da Amazon?3";
    this.perguntas[3] = "O que é o serviço de AWS da Amazon?4";
    this.perguntas[4] = "O que é o serviço de AWS da Amazon?5";
    this.perguntas[5] = "O que é o serviço de AWS da Amazon?6";

    //this.id = this.route.params['id'];
    console.log(this.route.params['id']);
  }

  proximaPergunta() {
    this.router.navigate(['/perguntas'], [this.id + 1]);
  }

}
