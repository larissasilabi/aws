import { Injectable } from '@angular/core';
import { Pergunta } from './pergunta';

@Injectable()
export class PerguntasService {

  private perguntas: Pergunta[] = [
    {id: 1, texto: '1) O que é o produto AWS da Amazon?', a: 'opção a', b: 'opção b', c: 'opção c', d: 'opção d', correta: 'a'},
    {id: 2, texto: '2) O que é o produto AWS da Amazon?', a: 'opção a', b: 'opção b', c: 'opção c', d: 'opção d', correta: 'a'},
    {id: 3, texto: '3) O que é o produto AWS da Amazon?', a: 'opção a', b: 'opção b', c: 'opção c', d: 'opção d', correta: 'a'},
    {id: 4, texto: '4) O que é o produto AWS da Amazon?', a: 'opção a', b: 'opção b', c: 'opção c', d: 'opção d', correta: 'a'},
    {id: 5, texto: '5) O que é o produto AWS da Amazon?', a: 'opção a', b: 'opção b', c: 'opção c', d: 'opção d', correta: 'a'},
    {id: 6, texto: '6) O que é o produto AWS da Amazon?', a: 'opção a', b: 'opção b', c: 'opção c', d: 'opção d', correta: 'a'}
  ];

  getPerguntas(){
    return this.perguntas;
  }

  getPergunta(id: number){
    for (let i=0; i<this.perguntas.length; i++){
      let pergunta = this.perguntas[i];
      if (pergunta.id == id){
        return pergunta;
      }
    }
    return null;
  }

  constructor() { }

}