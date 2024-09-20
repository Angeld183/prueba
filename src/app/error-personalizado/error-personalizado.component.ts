import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.services';

@Component({
  selector: 'app-error-personalizado',
  templateUrl: './error-personalizado.component.html',
  styleUrls: ['./error-personalizado.component.css']
})
export class ErrorPersonalizadoComponent {
  constructor(private router:Router,private miServicio: ServicioEmpleadosService, private empleadosService:EmpleadosService ) { } 
  // Puedes agregar lógica adicional aquí si es necesario
  
  volverHome(){ //para enrrutar
    this.router.navigate(['']);
    
  }
}

