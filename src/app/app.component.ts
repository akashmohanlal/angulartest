import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  // templateUrl: './app.component.html',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMessageItem = {
    id:1,
    title: "Hello world!",
    message: "This is a long ting message",
    isRead: false,
  }

  onMessageItemDelete(messageItem){
    
  }

}
