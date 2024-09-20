//esto es un servicio 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { } /**en los constructores se inyectan los servicios */

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
