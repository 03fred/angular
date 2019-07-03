import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less']
})
export class CursosComponent implements OnInit{

  nomePortal :string;
  cursos:string[];

constructor(private cursosServices: CursosService){
this.nomePortal = 'http://www.google.com.br';
//var service = new CursosService();
this.cursos = this.cursosServices.getCursos();

}

  ngOnInit(): void {
   
  }

}
