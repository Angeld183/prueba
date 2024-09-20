import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.services';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router,private empleadosService:EmpleadosService ) { } //inyectar el servicio router
  empleados:Empleado[]=[]
  
  ngOnInit(): void {


    //almacenar aqui tambien
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      this.empleados=Object.values(misEmpleados); 
      this.empleadosService.setEmpleados(this.empleados)//almacenar esos objetos aqui

    });

  

  }

  volverHome(){ //para enrrutar
    this.router.navigate(['/lista']);
    
  }
  
  agregarEmpleado(){ 
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleadosService.agregarEmpleadosServicio(miEmpleado);
  }
  
  cuadroNombre:string=''; 
  cuadroApellido:string='';
  cuadroCargo:string='';
  cuadroSalario:number=0;
}
