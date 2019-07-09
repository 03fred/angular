import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less'],
  providers: [CursoService]
})

export class CursosComponent implements OnInit {
  
//nomePortal: string;
cursos: string[] =[];

  constructor(private cursoServices: CursoService) {
   // this.nomePortal = 'http://www.google.com.br';
    //this.cursos = this.cursosServices.getCursos();

  }
  ngOnInit(): void {
    
    this.cursos = this.cursoServices.getCursos();
    this.cursoServices.emitirCursoCriado.subscribe(

      curso =>console.log(curso)

  );  
 
 
}
}