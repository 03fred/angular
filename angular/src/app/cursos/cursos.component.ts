import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less'],
  providers: [CursosService]
})

export class CursosComponent {   
//nomePortal: string;
cursos: string[];

  constructor(private cursosServices: CursosService) {
   // this.nomePortal = 'http://www.google.com.br';
    //this.cursos = this.cursosServices.getCursos();

  }
}
