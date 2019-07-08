import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.less'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(cursoInput) {
    this.cursoService.addCurso(cursoInput);
  }

}
