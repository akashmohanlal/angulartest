import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'at-message-item-list',
  templateUrl: './message-item-list.component.html',
  styleUrls: ['./message-item-list.component.css']
})
export class MessageItemListComponent implements OnInit {
  messageItems;

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageItems = this.messageService.get();
  }

  onMessageItemDelete(messageItem){
    this.messageService.delete(messageItem);
  }

  // countUnreadMessages(){
  //   this.countUnreadMessages = this.messageItems.filter(message => message.isRead === false).length;
  // }


}
