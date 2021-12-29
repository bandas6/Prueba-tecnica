import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionTiendasComponent } from './ubicacion-tiendas/ubicacion-tiendas.component';

const routes: Routes = [
  {
    path:'ubicacion',
    component:UbicacionTiendasComponent
  },
  {
    path:'**',
    redirectTo:'ubicacion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendasRoutingModule { }
