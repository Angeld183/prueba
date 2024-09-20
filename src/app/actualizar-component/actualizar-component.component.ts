import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.services';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent implements OnInit {

  constructor(private router:Router,private miServicio: ServicioEmpleadosService, private empleadosService:EmpleadosService, private route:ActivatedRoute) { } //inyectar el servicio router
  
  empleados:Empleado[]=[]
  
  accion:number;
  
  ngOnInit(): void {
    
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.empleadosService.empleados;

    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  volverHome(){ //para enrrutar
    this.router.navigate(['/lista']);
    
  }
  
  // actualizaEmpleado(){ 
  //   alert('Empleado Actualizado');
  //   let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  //   this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
  // }
  
  // eliminarEmpleado(){
  //   alert('Empleado Eleminado');
  //   this.empleadosService.eliminarEmpleado(this.indice);
  //   this.router.navigate(['/lista']);
  // }

  actualizaEmpleado(){ 
    if(this.accion == 1){
      alert('Empleado Actualizado');
      let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    }
    else{
      alert('Empleado Eleminado');
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['/lista']);
    }
    

  }


  cuadroNombre:string=''; 
  cuadroApellido:string='';
  cuadroCargo:string='';
  cuadroSalario:number=0;
  indice:number;


}
