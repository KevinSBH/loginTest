import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SEGURIDAD_RUTAS_COMPONENTES, SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { ContainerLoginComponent } from './container-login/container-login.component';


@NgModule({
  declarations: [SEGURIDAD_RUTAS_COMPONENTES],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
