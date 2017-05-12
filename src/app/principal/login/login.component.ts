import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome: string;
  fullPath: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.fullPath = "/assets/images/quiz.jpg";
  }

  comecar() {
    localStorage.setItem('nome', this.nome);
    this.router.navigate(['/perguntas/1']);
  }

  onSubmit(form){
    console.log(form);
  }
}
