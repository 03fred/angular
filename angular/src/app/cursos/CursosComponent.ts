import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { CursoService } from '../services/curso.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less'],

})
export class CursosComponent {
  cursos: string[];
  constructor(private CursoService: CursoService) {
  //  this.nomePortal = 'http://www.google.com.br';private cursosServices: CursosService
    //this.cursos = this.cursosServices.getCursos();
  }
}
