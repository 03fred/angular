import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.less']
})
export class ExemplosPipesComponent implements OnInit {

  book: any = {
    paginas: 100,
    preco: 59.90,
    lancamento: new Date(2019,5,23)

  }
  constructor() { }

  ngOnInit() {
  }

}
