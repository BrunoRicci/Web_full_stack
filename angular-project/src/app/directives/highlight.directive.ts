import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) { 
    console.log(element.nativeElement);
    var e = element.nativeElement;
    e.style.background = 'cyan';
  }

  ngOnInit(){

  }
}
