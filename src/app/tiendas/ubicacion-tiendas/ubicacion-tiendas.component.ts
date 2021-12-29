import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-ubicacion-tiendas',
  templateUrl: './ubicacion-tiendas.component.html',
  styles: [`
   #mapa{
    height: 100%;
    width: 100%;
  }
  `
  ]
})
export class UbicacionTiendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[-76.54531927235266 , 3.413044525004752],
      zoom:16
    });
  }

}
