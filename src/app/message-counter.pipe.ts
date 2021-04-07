import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageCounter'
})
export class MessageCounterPipe implements PipeTransform {

  transform(messageItems) {

    return messageItems.filter(obj => obj.isRead === false).length;
  }

}
