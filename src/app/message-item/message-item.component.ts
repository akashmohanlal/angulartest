import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'at-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() messageItem;
  @Output() delete = new EventEmitter();
  
  onDelete(){
    console.log("delete");
    this.delete.emit(this.messageItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// interface Message {
//   id ,
//     title: "Hello world!",
//     message: "This is a long ting message",
//     isRead: false,
// }