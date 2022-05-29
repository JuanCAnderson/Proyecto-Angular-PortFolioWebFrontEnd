import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {PortfolioService} from './servicios/portfolio.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    SobreMiComponent,
    HabilidadesComponent,
    EducacionComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
