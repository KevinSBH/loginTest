import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INICIO_RUTAS_COMPOMENTES, InicioRutasModule } from './inicio-rutas.module';

@NgModule({
  imports: [CommonModule, InicioRutasModule],
  declarations: [INICIO_RUTAS_COMPOMENTES],
})
export class InicioModule { }
