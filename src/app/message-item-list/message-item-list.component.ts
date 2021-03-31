import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-message-item-list',
  templateUrl: './message-item-list.component.html',
  styleUrls: ['./message-item-list.component.css']
})
export class MessageItemListComponent implements OnInit {
  messageItems = [
    {
      id: 1,
      title: "Hello world!",
      message: "This is a long ting message",
      isRead: true,
    }, 
    {
      id: 2,
      title: "Another message",
      message: "some other text",
      isRead: false,
    },
    {
      id: 2,
      title: "this just keeps going",
      message: "yet another message",
      isRead: false,
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  onMessageItemDelete(messageItem){

  }


}
