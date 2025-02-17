import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router,private miServicio: ServicioEmpleadosService, private empleadosService:EmpleadosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  volverHome(){ //para enrrutar
    this.router.navigate(['/contacto']);
    
  }
}
