import { Component } from '@angular/core';
import { Supplier } from '../classes/supplier';
import { SupplierService } from './services/supplier.service';
import { ValidarService } from 'src/app/shared/services/validar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent {
  suplier!: Supplier;
  suppliers!: Supplier[];

  miFormulario: FormGroup = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    originPlace: ['', Validators.required],
    bindingDate: [''],
    terminationDate: [''],
  });

  constructor(
    private fb: FormBuilder,
    private suppilerService: SupplierService,
    public validarService: ValidarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.suplier = this.miFormulario.value;
    console.log(this.suplier);
    this.router.navigate(['/modules/consultar-proveedor']);
      this.suppilerService.post(this.suplier).subscribe((resp) => {
        if (resp.ok !== false) {
          Swal.fire('Proveedor guardado correctamente', resp.error, 'success');
          this.miFormulario.reset();
        } else {
          Swal.fire('Error', resp.error, 'error');
        }
      });
  }
}
