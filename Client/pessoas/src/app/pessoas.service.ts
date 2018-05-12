import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PessoasService {

  private baseURL = "http://localhost:3000/pessoas";

  constructor(private http: Http) { }

  consulta() {
    return this.http.get(this.baseURL)
      .toPromise().then(resposta => resposta.json());
  }

  inserir(nome: string, idade: number) {
    return this.http.post(this.baseURL,
      {
        nome: nome,
        idade: idade
      })
      .toPromise().then(resposta => resposta.json());
  }

  remover(id: number) {
    return this.http.delete(this.baseURL + "/" + id)
      .toPromise().then(resposta => resposta.json());
  }

  atualizar(id: number, nome: string, idade: number) {
    return this.http.put(this.baseURL,
      {
        id: id,
        nome: nome,
        idade: idade
      })
      .toPromise().then(resposta => resposta.json());
  }

}
