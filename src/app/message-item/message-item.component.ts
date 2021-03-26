import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'at-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() messageItem;
  
  onDelete(){
    console.log("delete");
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