import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro.usuario.component';
import { ListagemUsuariosComponent} from './listagem.usuarios.component';

const appRoutes: Routes = [
  { path: 'usuarios', component: ListagemUsuariosComponent },
  { path: 'novo-usuario', component: CadastroUsuarioComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ListagemUsuariosComponent
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
