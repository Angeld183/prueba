import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.services';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Registro de Empleados';//*****titulo utilizado para la interpolacion en el archivo html llamado: app.component.html*******//
  constructor(private miServicio: ServicioEmpleadosService, private empleadosService:EmpleadosService) { 
    // this.empleados=this.empleadosService.empleados
  }

  ngOnInit(): void {
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
    
      //aqui deja de funcionar, correcion: no dejaba de funcionar sino que habia que hacer un copia y pega de este codigo en proyects.ts
      this.empleados=Object.values(misEmpleados); //se busca extraer los varoles del objeto observable 
      this.empleadosService.setEmpleados(this.empleados)//almacenar esos objetos aqui
    
  });
  }
  empleados:Empleado[]=[] //array vacio.//  //se busca pasar por parametro
  //**Para agregar nuevos empleados al array ***/
  agregarEmpleado(){ 
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleadosService.agregarEmpleadosServicio(miEmpleado);
  }
  
  cuadroNombre:string=''; 
  cuadroApellido:string='';
  cuadroCargo:string='';
  cuadroSalario:number=0;

}
