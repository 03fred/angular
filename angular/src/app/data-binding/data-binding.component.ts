import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.less']
})
export class DataBindingComponent implements OnInit {
 url:string = 'http://www.google.com'

 cursoAngular:boolean = true;
 urlImage = 'http://lorempixel.com/400/200/';

 getValor(){
   return 1;
 }
 getCurtirCurso(){
   return true;
 }
  constructor() { }

  ngOnInit() {
  }

}
