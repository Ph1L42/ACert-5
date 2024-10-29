import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  +
  constructor(private readonly el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onHouseLeave() {
    this.highlight('')
  }

}
