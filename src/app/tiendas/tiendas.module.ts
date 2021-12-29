import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendasRoutingModule } from './tiendas-routing.module';
import { UbicacionTiendasComponent } from './ubicacion-tiendas/ubicacion-tiendas.component';
import { InformacionTiendasComponent } from './components/informacion-tiendas/informacion-tiendas.component';


@NgModule({
  declarations: [
  
    UbicacionTiendasComponent,
       InformacionTiendasComponent
  ],
  imports: [
    CommonModule,
    TiendasRoutingModule
  ]
})
export class TiendasModule { }
