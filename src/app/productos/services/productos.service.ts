import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../interface/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //api https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd 
  //No permite aser POT , PUT , DELETE ni querys 
  constructor(private client:HttpClient) { }


  //obtener Datos

  obtenerProductos():Observable<Productos[]>{
    return this.client.get<Productos[]>('https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd')
  }

  

}
