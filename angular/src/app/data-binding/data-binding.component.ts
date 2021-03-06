import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.less']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://www.google.com'
  pessoa: any = {
    nome: 'fred',
    idade: 20
  }
  valorInput: string = "";
  valorSalvoInput: string = "";
  isMouseOver: boolean = false;
  cursoAngular: boolean = true;
  urlImage = 'http://lorempixel.com/400/200/';
  nome: string = "abc";
   nomeDoCurso: string = "angular";
  valorInicial = 15;

  onMouseOverOut() {

    this.isMouseOver = !this.isMouseOver;
  }
  salvarValor(valor) {
    this.valorSalvoInput = valor;
  }

  onKeyUp(evento: KeyboardEvent) {


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

  onMudouValor(evento) {
    console.log(evento);
  }
  constructor() { }
  ngOnInit() {
  }

}
