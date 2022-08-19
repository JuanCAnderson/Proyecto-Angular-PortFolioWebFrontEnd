import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/mi-experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditExperienciaComponent } from './componentes/mi-experiencia/edit-experiencia/edit-experiencia.component';

const routes: Routes = [
  {path: '',component: HomeComponent},

  {path: 'login',component: LoginComponent},

  {path: 'nuevaexp', component: NewExperienciaComponent},

  {path: 'editexp/:id', component:EditExperienciaComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
