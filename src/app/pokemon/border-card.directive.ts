import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' // attention à bien mettre les crochets sinon ça devient un composant
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private initialType: string = 'solid';
  private defaultColor: string = '#009688';
  private defaultType: string = 'solid';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor, this.initialType);
  }

  @Input ('pkmnBorderColor') borderColor: string; //avec alias
  //@Input() pkmnBorderCard: string; // sans alias

  @Input() pkmnBorderType: string; //sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor, this.pkmnBorderType || this.defaultType )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor, this.initialType)
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${this.defaultHeight}px`;
  }

  setBorder(color: string, type: string) {
    this.el.nativeElement.style.border = `${type} 4px ${color}`;
  }

}
