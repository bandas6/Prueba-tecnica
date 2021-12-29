import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../interface/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {
  
  datos:Productos[]=[];

  constructor(private productosService:ProductosService,
              private route:Router) { }

  ngOnInit(): void {
    this.productos();
  }

  productos(){
    this.productosService.obtenerProductos()
    .subscribe(datos => {
        this.datos =  datos;
    })
  }

  verProducto(){
    this.route.navigate(['/productos/verProducto'])
  }

}
