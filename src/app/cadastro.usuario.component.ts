import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cadastro-usuario',
    templateUrl: './cadastro.usuario.component.html',
})
export class CadastroUsuarioComponent {
  title = 'KondoUP';

  formUsuario = new FormGroup({

    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(),
    website: new FormControl()
  });
}
