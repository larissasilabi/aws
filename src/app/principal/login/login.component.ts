import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  comecar() {
    this.router.navigate(['/perguntas/1']);
  }

  onSubmit(form){
    console.log(form);
  }
}
