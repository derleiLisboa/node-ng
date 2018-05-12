import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-crud-pessoas',
  template: `
  <ul>
     <li *ngFor="let item of lista">
        {{item.nome}} {{item.idade}} <button (click)="carregar(item)" >Editar</button> <button (click)="excluir(item.id)" >Excluir</button>
     </li>
  </ul>
  <input type="hidden" [(ngModel)]="id" />
  Nome:<input type="text" [(ngModel)]="nome" />
  Idade:<input type="number" [(ngModel)]="idade" />
  <button (click)="inserir()" >{{textButton}}</button>
`,
  styleUrls: ['./crud-pessoas.component.css']
})
export class CrudPessoasComponent implements OnInit {

  private lista = [];
  private id = 0;
  private nome = "";
  private idade = 0;
  private textButton = "Inserir";

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza() {
    this.pessoasService.consulta().then(
      pessoas => {
        this.lista = pessoas;
        console.log(pessoas);
      }
    );
  }

  inserir() {

    if (this.id > 0) {

      this.pessoasService.atualizar(this.id, this.nome, this.idade)
        .then(() => {
          this.limpar();
          this.atualiza();
        });

    } else {

      this.pessoasService.inserir(this.nome, this.idade)
        .then(() => {
          this.limpar();
        });
    }

  }

  limpar() {
    this.nome = "";
    this.idade = 0;
    this.atualiza();
    this.textButton = "Inserir";
  }

  carregar(pessoa) {
    this.id = pessoa.id;
    this.nome = pessoa.nome;
    this.idade = pessoa.idade;
    this.textButton = "Alterar";
  }



  excluir(id) {
    this.pessoasService.remover(id)
      .then(() => {
        this.atualiza();
      });
  }

}
