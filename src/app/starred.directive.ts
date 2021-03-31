import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[atStarred]'
})
export class StarredDirective {
  @HostBinding('class.bi-star-fill') isStarred = true;
  @HostBinding('class.bi-star') notStarred = true;


  @Input() set atStarred(value){
      this.isStarred = value;
      this.notStarred =!value;
  }
  constructor() { }

}
