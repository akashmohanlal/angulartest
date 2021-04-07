import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageItems = [
    {
      id: 1,
      title: "Hello world!",
      message: "This is a long ting message,we will try to truncate the text so it does not expand beyond whats required",
      isRead: true,
      isStarred: false,
      priority: 'low'
    }, 
    {
      id: 2,
      title: "Another message",
      message: "some other text",
      isRead: false,
      isStarred : true,
      priority: 'low'
    },
    {
      id: 3,
      title: "this just keeps going",
      message: "yet another message",
      isRead: true,
      isStarred: false,
      priority: 'high'
    },
    {
      id: 4,
      title: "nice day",
      message: "Today we have good weather!",
      isRead: false,
      isStarred: false,
      priority: 'low'
    },
    {
      id: 5,
      title: "Its snowing monday",
      message: "Maybe",
      isRead: true,
      isStarred: false,
      priority: 'medium'
    }

  ]

  constructor() { }

  get() {
    return this.messageItems;
  }

  add(messageItem){
    this.messageItems.push(messageItem);
  }

  delete(messageItem){
    const index = this.messageItems.indexOf(messageItem);
    if(index >= 0){
      this.messageItems.splice(index,1);
    }
  }

  deleteById(messageId){
   let first = this.messageItems.filter(message => message.id = messageId)[0];

   if(first != null){
     this.delete(first);
   }
  }

  update(messageItem){
   this.deleteById(messageItem);
   this.add(messageItem);
  }  

}
