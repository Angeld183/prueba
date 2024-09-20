import {  Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadosService{

    empleados:Empleado[]=[];

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices) { 
    }

    //aqui no funciona
    setEmpleados(misEmpleados:Empleado[]){
        this.empleados=misEmpleados;
    }
    
    obtenerEmpleados(){
        return this.dataService.cargarEmpleado();
    }
    
    agregarEmpleadosServicio(empleado:Empleado){
            this.servicioVentanaEmergente.muestraMensaje("Persona Registrada: " + "\n"
                + "Nombre: "     +
                empleado.nombre  + "\n" 
                + "Apellido: "   + 
                empleado.apellido+ "\n"
                + "Cargo: "      +
                empleado.cargo   + "\n"
                + "Salario: "    + 
                empleado.salario + 
                            "\n" + "\n" 
            );

            this.empleados.push(empleado);

            this.dataService.guardarEmpleados(this.empleados);
        }

        encontrarEmpleado(indice:number){
            let empleado:Empleado=this.empleados[indice];

            return empleado;
        }

        actualizarEmpleado(indice:number, empleado:Empleado){
            let empleadoModificado=this.empleados[indice];
            this.dataService.actualizarEmpleado(indice,empleado);

            empleadoModificado.nombre=empleado.nombre;
            empleadoModificado.apellido=empleado.apellido;
            empleadoModificado.cargo=empleado.cargo;
            empleadoModificado.salario=empleado.salario;
        }


        eliminarEmpleado(indice:number){
            alert("Actualice la pagina cuando regrese al menu")
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        if(this.empleados!=null)
        this.dataService.guardarEmpleados(this.empleados);
        }
}
