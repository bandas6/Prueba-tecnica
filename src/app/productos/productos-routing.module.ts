import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';

const routes: Routes = [
      {path:'productos',component:ProductosComponent} ,
      {path:'productos/:id',component:ProductosComponent} ,
      {path:'verProducto',component:VerProductoComponent},
      {path:'**',redirectTo:'productos'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
