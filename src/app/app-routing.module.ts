import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/mi-experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditExperienciaComponent } from './componentes/mi-experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/mi-educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/mi-educacion/editeducacion/editeducacion.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';

const routes: Routes = [
  {path: '',component: HomeComponent},

  {path: 'login',component: LoginComponent},

  {path: 'nuevaexp', component: NewExperienciaComponent},

  {path: 'editexp/:id', component:EditExperienciaComponent},

  {path: 'nuevaedu', component:NeweducacionComponent},

  {path: 'editedu/:id', component:EditeducacionComponent},

  {path:'nuevaproyecto', component:NewproyectoComponent},

  {path:'editproyecto/:id', component :EditproyectoComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
