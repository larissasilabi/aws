import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { } from '/aws-sdk';

import { routing } from './../../app.routing';
import { PerguntasService } from './perguntas.service';
import { Pergunta } from './pergunta';

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
    if (this.id < 7) {
      this.router.navigate(['/perguntas', this.id]);
    }
    else {
      this.router.navigate(['/resultado']);
    }
  }

  teste() {
    // var $credentials = {
    //   "accessKeyId": "AKIAITVF5OWLUUUAAOYA",
    //   "secretAccessKey": "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",
    //   "region": "sa-east-1"
    // }
    // var AWS = require('aws-sdk');
    // var $db = new AWS.DynamoDB();
    // var DynamoDB = require('@awspilot/dynamodb')($db);

    // DynamoDB
    //   .table('users')
    //   .insert({
    //     id: 'teste',
    //     acertos: 1,
    //   }, function (err, data) {
    //     console.log(err, data)
    //   })

    var AWS = require('aws-sdk');
    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = "AKIAITVF5OWLUUUAAOYA";
    AWS.config.secretAccessKey = "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";
    AWS.config.region = "sa-east-1";
    var s3 = new AWS.S3();
    // Os nomes do bucket devem ser exclusivos em todos os usuários do S3
    var myBucket = '953382053291';
    var myKey = 'myBucketKey';
    var params = {
      Key: { HashKeyElement: {}},
      TableName: 'users'
    };

    s3.createBucket({ Bucket: myBucket }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        s3.putObject(params, function (err, data) {
          if (err) {
            console.log(err)
          } else {
            console.log("Dados enviados com sucesso para myBucket/myKey");
          }
        });
      }
    });


    // var AWS = require("aws-sdk");

    // AWS.config = new AWS.Config();
    // AWS.config.accessKeyId = "AKIAITVF5OWLUUUAAOYA";
    // AWS.config.secretAccessKey = "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";
    // AWS.config.region = "sa-east-1";

    // var dynamodb = new AWS.DynamoDB({ apiVersion: '2011-12-05' });
    // var docClient = new AWS.DynamoDB.DocumentClient();

    // console.log("Querying for users.");

    // var params = {
    //   Key: { HashKeyElement: {}},
    //   TableName: 'users'
    // };
    // dynamodb.getItem(params, function (err, data) {
    //   if (err) console.log(err, err.stack); // an error occurred
    //   else console.log(data);           // successful response
    // });

  }

}
