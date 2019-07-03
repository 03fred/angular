import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.less']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://www.google.com'
  
  valorInput:string = "";
  valorSalvoInput :string="";

  cursoAngular: boolean = true;
  urlImage = 'http://lorempixel.com/400/200/';

  salvarValor( valor ){
    this.valorSalvoInput = valor;
  }

  onKeyUp(evento: KeyboardEvent ) {


    this.valorInput = ((<HTMLInputElement>evento.target).value);
   
  }
  botaoclickado() {
    alert("evento criado pelo botao clickado");
  }

  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
