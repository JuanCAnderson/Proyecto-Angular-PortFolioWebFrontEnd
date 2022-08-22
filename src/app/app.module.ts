import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EducacionComponent } from './componentes/mi-experiencia/educacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { NewExperienciaComponent } from './componentes/mi-experiencia/new-experiencia.component';
import { ExperienciaComponent } from './componentes/mi-educacion/experiencia.component';
import { EditExperienciaComponent } from './componentes/mi-experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/mi-educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/mi-educacion/editeducacion/editeducacion.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';





@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    SobreMiComponent,
    HabilidadesComponent,
    EducacionComponent,
    FooterComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent



   
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
