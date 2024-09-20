import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  templateUrl: './caracteristicas-empleados-c.component.html',
  styleUrls: ['./caracteristicas-empleados-c.component.css']
})
export class CaracteristicasEmpleadosCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miSegundoServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string) {
    alert("Se agrego una Caracteristica");
    // this.miSegundoServicio.muestraMensaje(value); //esto es un servicio 
    this.caracteristicasEmpleados.emit(value);  //esto es del segundo servicio
  }

}
