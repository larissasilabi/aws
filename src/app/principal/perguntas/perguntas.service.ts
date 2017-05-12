import { Injectable } from '@angular/core';
import { Pergunta } from './pergunta';

@Injectable()
export class PerguntasService {

  private perguntas: Pergunta[] = [
    {id: 1, texto: '1) O que motivou a Amazon a criar o produto AWS (Amazon Web Services) ?', a: 'Oportunidade de mercado', b: 'Expandir áreas de atuação', c: 'Necessidades próprias', d: 'Para ser o produto principal da empresa', correta: 'c'},
    {id: 2, texto: '2) Qual a principal característica do produto EC2 da Amazon?', a: 'Elasticidade automática', b: 'Servidores virtuais na nuvem', c: 'Armazenamento escalável em nuvem', d: 'Banco de daod NoSQL gerenciado', correta: 'b'},
    {id: 3, texto: '3) Em qual dos seguimentos o AWS não atua ?', a: 'Saúde e ciências biológicas', b: 'Serviços financeiros', c: 'Internet das coisas (IoT)', d: 'Nenhuma das opções', correta: 'd'},
    {id: 4, texto: '4) A partir de qual plano de suporte está incluso atendimento online?', a: 'Business', b: 'Basic', c: 'Enterprise', d: 'Desenvolvedor', correta: 'a'},
    {id: 5, texto: '5) Quais dos modelos de computação em nuvem tem um crescimento maior ?', a: 'PaaS e SaaS', b: 'SaaS e IaaS', c: 'IaaS e PaaS', d: 'Todos estão crescendo igualmente', correta: 'c'},
    {id: 6, texto: '6) Qual serviço do AWS que possibilita que a Netflix forneça conteúdo rápidamente a todo o mundo?', a: 'Amazon VPC', b: 'Amazon CloudFront', c: 'Amazon Route 53', d: 'Elastic Load Balancing', correta: 'b'}
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
