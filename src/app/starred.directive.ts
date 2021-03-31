import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[atStarred]'
})
export class StarredDirective {
  @HostBinding('class.is-starred') isStarred = true;
  constructor() { }

}
