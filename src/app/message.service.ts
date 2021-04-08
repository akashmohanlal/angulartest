import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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
      isStarred: true,
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

  constructor(private http: HttpClient) { }

  get(priority) {
    const getOptions ={
      params : {priority}
    }
    return this.http.get<MessageItemResponse>("messageitems", getOptions)
      .pipe(
        map((response: MessageItemResponse) => {
          return response.messageItems;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
  
  add(messageItem) {
    //this.messageItems.push(messageItem);
    return this.http.post('messageitems',messageItem)
  }

  delete(messageItem) {
   return this.http.delete(`messageItem/${messageItem.id}`);
  }

  deleteById(messageId) {
    let first = this.messageItems.filter(message => message.id = messageId)[0];

    if (first != null) {
      this.delete(first);
    }
  }

  update(messageItem) {
    this.deleteById(messageItem);
    this.add(messageItem);
  }

}

export interface MessageItem {
  id: number;
  title: string;
  message: string;
  isRead: boolean;
  isStarred: boolean;
  priority: string;
}

interface MessageItemResponse {
  messageItems: MessageItem[];
}