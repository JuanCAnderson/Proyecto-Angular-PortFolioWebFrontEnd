import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

expe:Experiencia[]=[];

  constructor(private sExperienciaService:SExperienciaService,private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
      if(this.tokenService.getToken()){
        this.isLogged= true;
      }else{
        this.isLogged=false;
      }
    }

    cargarExperiencia():void{
    this.sExperienciaService.lista().subscribe(
        data => {this.expe = data;}
      )
    }

    delete(id?: number){
      if(id != undefined){
        this.sExperienciaService.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          }, err => {
            alert("No se pudo borrar la experiencia");
          }
        )
      }
    }

  }





