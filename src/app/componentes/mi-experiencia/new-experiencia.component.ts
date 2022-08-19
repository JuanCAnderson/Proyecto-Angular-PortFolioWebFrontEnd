import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE : string = '';
  descripcionE: string = '';
  

  constructor(private sExperencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreE,this.descripcionE);
    this.sExperencia.save(expe).subscribe(data => {
      alert("Experiencia/Educacion añadida");
      this.router.navigate(['']);
    }, err => {
      alert("fallo");
      this.router.navigate(['']);
    }
    )
  }
}
