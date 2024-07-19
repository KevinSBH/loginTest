import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerLoginComponent } from './container-login/container-login.component';
import { LoginComponent } from './login/login.component';

export const SEGURIDAD_RUTAS_COMPONENTES = [
  LoginComponent,
  ContainerLoginComponent
];

const routes: Routes = [
  {
    path: "",
    component: ContainerLoginComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
