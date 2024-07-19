import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, ROUTING_COMPONENTS } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { InicioModule } from './modulos/inicio/inicio.module';

@NgModule({
  declarations: [
    AppComponent,
    ROUTING_COMPONENTS
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SeguridadModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
