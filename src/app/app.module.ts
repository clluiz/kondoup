import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro.usuario.component';

const appRoutes: Routes = [

  { path: 'novo-usuario', component: CadastroUsuarioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
