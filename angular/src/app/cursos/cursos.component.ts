import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less']
})
export class CursosComponent implements OnInit{

  nomePortal :string;
  cursos:string[] = ['Java','Ext','JS','Angular'];

constructor(){
this.nomePortal = 'http://www.google.com.br';
}

  ngOnInit(): void {
   
  }

}
