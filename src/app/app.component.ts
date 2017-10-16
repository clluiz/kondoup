import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KondoUP';

  users: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit():void {

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data;
    })
  }

  novoUsuario(): void {
    
  }
}
