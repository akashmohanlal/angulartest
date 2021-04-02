import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[atStarred]'
})
export class StarredDirective {
  @HostBinding('class.bi-star-fill') isStarred = true;
  @HostBinding('class.bi-star') notStarred = true;
  @HostBinding('class.is-starred-hovering') hovering = false;
  @Output() starred = new EventEmitter();

  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }

  @HostListener('click') onClick(){
    console.log(this);
    this.isStarred = !this.isStarred;
    this.notStarred = !this.notStarred;
    this.starred.emit(this);
    console.log(this);
  }

  @Input() set atStarred(value){
      this.isStarred = value;
      this.notStarred =!value;
  }
  constructor() { }

}
