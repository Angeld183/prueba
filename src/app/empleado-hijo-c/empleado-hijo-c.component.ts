import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {


  // hay que especificar el tipo ya sea string, variable, etc.
  @Input() empleadoDeLista:Empleado; 
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }


empleados:Empleado[]=[ //*****ARRAY DE empleados ******/
  new Empleado("Juan","Diaz","Presidente",7500),
  new Empleado("Ana","Guzman","Directora",5500),
  new Empleado("Maria","Fernandez","Jefa seccion",3500),
  new Empleado("Laura","Lopez","Administrativo",2500),
];

empleadoAgregado(empleado:Empleado){
  this.empleados.push(empleado);
}

arrayCaracteristicas = ['']

agregarCaracteristica(nuevaCaracteristica: string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica);
}

}