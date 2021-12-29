import { Component } from '@angular/core';

interface DataShared{
  option:string;
  ruta:string;
}

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styles: [
  ]
})
export class SharedComponent  {

    options:DataShared[]  = [
      {
        option:'Productos',
        ruta:'productos/productos'
      },
      {
        option:'Tiendas fisicas',
        ruta:'tiendas/ubicacion'
      }
    ]

}
