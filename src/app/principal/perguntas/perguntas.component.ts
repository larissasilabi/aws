import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';


import { routing } from './../../app.routing';
import { PerguntasService } from './perguntas.service';
import { Pergunta } from './pergunta';

// import entire SDK
import AWS = require('aws-sdk');
// import AWS object without services
import AWS = require('aws-sdk/global');
// import individual service
import S3 = require('aws-sdk/clients/s3');

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  id: number;
  perguntas: any[] = [];
  pergunta: Pergunta;
  inscricao: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private perguntasService: PerguntasService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = this.route.snapshot.params['id'];
        this.pergunta = this.perguntasService.getPergunta(this.route.snapshot.params['id']);
      }
    );
  }

  proximaPergunta() {
    this.id++;
    console.log(this.id);
    if (this.id < 7){
      this.router.navigate(['/perguntas', this.id]);    
    }
    else {
      this.router.navigate(['/resultado']);   
    }

  }

}
