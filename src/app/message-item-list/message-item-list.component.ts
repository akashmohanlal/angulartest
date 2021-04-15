import { Component, OnInit } from '@angular/core';
import { MessageService, MessageItem } from '../message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-message-item-list',
  templateUrl: './message-item-list.component.html',
  styleUrls: ['./message-item-list.component.css']
})
export class MessageItemListComponent implements OnInit {
  messageItems: MessageItem[];
  priority = '';

  constructor(private messageService: MessageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let priority = paramMap.get('priority');
        if (priority === "all" || priority === null) {
          priority = '';
        }
        this.getMessageItems(priority);
      });
  }


  onMessageItemDelete(messageItem) {
    this.messageService.delete(messageItem)
      .subscribe(() => {
        this.getMessageItems('')
      });
  }

  getMessageItems(priority: string) {
    this.messageService.get(priority)
      .subscribe(messageItems => {
        this.messageItems = messageItems;
      });
  }



  // countUnreadMessages(){
  //   this.countUnreadMessages = this.messageItems.filter(message => message.isRead === false).length;
  // }


}
