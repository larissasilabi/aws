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
    AWS.config.region = "us-east-1d";
    AWS.config.apiVersions = {dynamodb: '2012-08-10'};
        
    var dynamodb = new AWS.DynamoDB();

    // Create an S3 client
    var s3 = new AWS.S3();

    // Create a bucket and upload something into it
    var bucketName = 'usjt';
    var keyName = 'hello_world.txt';
    var params = { RequestItems: {}}

    
    dynamodb.batchGetItem(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
        });
// s3.createBucket({Bucket: bucketName}, function() {
//   var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
//   s3.geputObject(params, function(err, data) {
//     if (err)
//       console.log(err)
//     else
//       console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//   });
// });


  }

}
