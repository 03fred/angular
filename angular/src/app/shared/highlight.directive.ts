import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {


  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightCLor;
  }

  @HostListener('mouseleave') onmouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightCLor: string  = 'yellow';

  constructor() { }

  ngOnInit(){

    this.backgroundColor = this.defaultColor;
  }

}
