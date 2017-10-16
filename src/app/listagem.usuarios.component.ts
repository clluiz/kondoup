import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'listagem-usuarios',
    templateUrl: './listagem.usuarios.component.html',
})
export class ListagemUsuariosComponent implements OnInit {
  title = 'KondoUP';
  users: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data;
    });
  }
}
