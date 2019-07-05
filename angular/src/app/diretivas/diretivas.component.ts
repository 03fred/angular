import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.less']
})
export class DiretivasComponent implements OnInit {
  aba = 'home';


  /*listaCursos: string[] = [];

  mostrarCursos: boolean = false;
  
  adicionarCursos(){
  this.listaCursos[0] = 'angular';
  this.mostrarCursos = !this.mostrarCursos;
  }
*/

  constructor() { }

  ngOnInit() {
  }

}
