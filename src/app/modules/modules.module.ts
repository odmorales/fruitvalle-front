import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../design/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SupplierComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ModulesModule { }
