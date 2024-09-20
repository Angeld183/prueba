import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c/caracteristicas-empleados-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.services';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { InicioComponent } from './inicio/inicio.component';
import { DataServices } from './data.services';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'

const appRoutes:Routes=[
  {path:'login', component:LoginComponent},
  {path: '', component:InicioComponent},
  {path:'lista', component:HomeComponentComponent},
  {path:'registroTrabajador', component:ProyectosComponentComponent},
  {path:'quienesSomos', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizarComponentComponent},
  {path:'**', component:ErrorPersonalizadoComponent}//culquier cosa que no sea una url declarada, se va a esta 
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizarComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosService,DataServices],//esto es un servicio 
  bootstrap: [AppComponent]
})
export class AppModule { }
