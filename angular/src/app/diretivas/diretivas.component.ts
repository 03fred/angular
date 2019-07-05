import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.less']
})
export class DiretivasComponent implements OnInit {
 
 cursosFor: string[] = ['Angular','Java','Phonegap'];
 
  // aba = 'home';


  /*listaCursos: string[] = [];

  mostrarCursos: boolean = false;
  
  adicionarCursos(){
  this.listaCursos[0] = 'angular';
  this.mostrarCursos = !this.mostrarCursos;
  }
*/

  constructor() { }

  ngOnInit() {

   for(let i =0; i < this.cursosFor.length;i++){
       let cursosFor = this.cursosFor[i];

   }

  }

}
