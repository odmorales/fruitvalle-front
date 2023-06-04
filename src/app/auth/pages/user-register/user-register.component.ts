import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidarService } from 'src/app/shared/services/validar.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  usuario?: Usuario
  tipoSeleccionado?: string;

  miFormulario: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    userType: ['', Validators.required],
    email: ['', Validators.required],
    name: ['', Validators.required],
    position: [''],
    phone: [''],
    lastname: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    public validarService: ValidarService,
    private usuarioService: UsuarioService,
    private router: Router) {
    this.validarService.recibirFomulario(this.miFormulario);
  }

  ngOnInit(): void {
    this.miFormulario.get('userType')?.valueChanges
      .pipe(
        tap((value) => this.tipoSeleccionado = value)
      )
      .subscribe();
  }

  guardar(){
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let usuario: Usuario;
    usuario = this.miFormulario.value;

    this.usuarioService.post(usuario).subscribe(resp => {
      if (resp.ok !== false) {
        Swal.fire('Usuario registrado correctamente', resp.error, 'success');
        this.miFormulario.reset();
      } else {
        Swal.fire('Error', resp.error, 'error');
      }
      this.router.navigate(['auth/login']);
    });
  }

}
