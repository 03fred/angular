import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseLeave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor() {


  }

}
