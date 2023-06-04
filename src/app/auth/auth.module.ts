import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../design/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './pages/user-register/user-register.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
