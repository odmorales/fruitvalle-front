import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChildFn } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { ConsultarSupplier } from './supplier/consultar-suppliers/consultar-suppliers.component';
import { canActivateChild } from '../auth/guards/hasroleguard.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [canActivateChild],
    children: [
      {
        path: 'proveedor',
        component: SupplierComponent,
        data: {
          roles: ['empleado']
        }
      },
      {
        path: 'consultar-proveedor',
        component: ConsultarSupplier,
        data: {
          roles: ['cliente', 'empleado']
        }
      },
      {
        path: '**', redirectTo: ''
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
