import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLightDirective {
  @Input() appHightLight = 'red';

  constructor(private el: ElementRef) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');

  }

  ngOnInit(): void {
    console.log('bbbbbbbbb');
    this.el.nativeElement.style.color = this.appHightLight;
  }
}
