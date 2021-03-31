import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-message-item-list',
  templateUrl: './message-item-list.component.html',
  styleUrls: ['./message-item-list.component.css']
})
export class MessageItemListComponent implements OnInit {
  unreadMessageCount = 0;
  messageItems = [
    {
      id: 1,
      title: "Hello world!",
      message: "This is a long ting message,we will try to truncate the text so it does not expand beyond whats required",
      isRead: true,
      isStarred: false
    }, 
    {
      id: 2,
      title: "Another message",
      message: "some other text",
      isRead: false,
      isStarred : true
    },
    {
      id: 3,
      title: "this just keeps going",
      message: "yet another message",
      isRead: true,
      isStarred: false
    },
    {
      id: 4,
      title: "nice day",
      message: "Today we have good weather!",
      isRead: false,
      isStarred: false
    },
    {
      id: 5,
      title: "Its snowing monday",
      message: "Maybe",
      isRead: true,
      isStarred: false
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

  onMessageItemDelete(messageItem){

  }

  // countUnreadMessages(){
  //   this.countUnreadMessages = this.messageItems.filter(message => message.isRead === false).length;
  // }


}
