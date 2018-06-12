import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appContents]'
})
export class ContentsDirective {
  @Input('appContents') appContents: string;
  @Input('company') company: string;

  constructor(
    private el: ElementRef
  ) {
    console.log(this.company);
  }
}
