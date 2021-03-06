import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.less']
})
export class OutputPropertyComponent{

  @Input('valor') valor:number = 0;
   
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', {static: true}) campoValorInput: ElementRef;

  subtracao(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor : this.valor});
  }

  soma(){
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor : this.valor});

  }


}
