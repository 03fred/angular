import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.less']
})
export class OutputPropertyComponent implements OnInit {

  @Input('valor') valor:number = 0;
   
  @Output() mudouValor = new EventEmitter();

  subtracao(){
    this.valor --;
    this.mudouValor.emit({novoValor : this.valor});
  }

  soma(){
    this.valor ++;
    this.mudouValor.emit({novoValor : this.valor});

  }


  constructor() { }

  ngOnInit() {
  }

}
