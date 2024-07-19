import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerInsideComponent } from './shared/components/container-inside/container-inside.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const ROUTING_COMPONENTS = [
  ContainerInsideComponent,
  HeaderComponent 
];


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
