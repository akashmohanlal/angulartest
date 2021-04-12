import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

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
    return this.http.post("messageitems",messageItem)
  }

  delete(messageItem) {
   return this.http.delete(`messageitems/${messageItem.id}`)
   .pipe(catchError(this.handleError));
  }

  // deleteById(messageId) {
  //   let first = this.messageItems.filter(message => message.id = messageId)[0];

  //   if (first != null) {
  //     this.delete(first);
  //   }
  // }

  // update(messageItem) {
  //   this.deleteById(messageItem);
  //   this.add(messageItem);
  // }

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