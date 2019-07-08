import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';




@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

 // cursosService: CursoService;
  cursos: string[] = [];
  

  constructor( private cursosService:  CursoService) {

    //this.cursosService = new CursoService();
    //this.cursosService = _cursosService;

   }

  ngOnInit() {

    this.cursos = this.cursosService.getCursos();
  }

}
