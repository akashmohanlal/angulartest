import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[atStarred]'
})
export class StarredDirective {
  @HostBinding('class.bi-star-fill') isStarred = true;
  @HostBinding('class.bi-star') notStarred = true;
  @HostBinding('class.is-starred-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }

  @Input() set atStarred(value){
      this.isStarred = value;
      this.notStarred =!value;
  }
  constructor() { }

}
