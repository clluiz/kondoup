import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cadastro-usuario',
    templateUrl: './cadastro.usuario.component.html',
})
export class CadastroUsuarioComponent {
    title = 'KondoUP';

    constructor(private router: Router) { }

    formUsuario = new FormGroup({
        name: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(),
        website: new FormControl()
    });
    cancelar() {
        this.router.navigateByUrl('/usuarios');
    }
    cadastrar() {
        Object.keys(this.formUsuario.controls).forEach(field => {
            const control = this.formUsuario.get(field);
            control.markAsDirty({ onlySelf: true });
        });
        if (this.formUsuario.valid) {

        } else {

        }
    }
}
