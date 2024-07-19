import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerInsideComponent } from 'src/app/shared/components/container-inside/container-inside.component';
import { Oauth2Guard } from 'src/app/shared/guards/oauth2.guard';

export const INICIO_RUTAS_COMPOMENTES = [];

const routes: Routes = [
  {
    path: "inicio",
    component: ContainerInsideComponent,
    canActivate:[Oauth2Guard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InicioRutasModule { }
