import { HttpBackend, HttpEvent, HttpRequest, HttpResponse } from "@angular/common/http";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Observable, Observer } from "rxjs";
import { MessageItem } from "./message.service";

export class MockXhrBackend implements HttpBackend {
  private messageItems : MessageItem[] = [
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

  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.urlWithParams.indexOf("messageitems?priority=") >= 0 || request.url === "messageitems") {
            let priority;
            if (request.urlWithParams.indexOf('?') >= 0) {
              priority = request.urlWithParams.split('=')[1];
              if (priority === 'undefined') { priority = ''; }
            }
            let messages;
            if (priority) {
              messages = this.messageItems.filter(i => i.priority === priority);
            } else {
              messages = this.messageItems;
            }
            responseOptions = {
              body: { messageItems: JSON.parse(JSON.stringify(messages)) },
              status: 200
            };
          } else {
            let messages;
            const idToFind = parseInt(request.url.split('/')[1], 10);
            messages = this.messageItems.filter(i => i.id === idToFind);
            responseOptions = {
              body: JSON.parse(JSON.stringify(messages[0])),
              status: 200
            };
          }
          break;
        case 'POST':
          const mediaItem = request.body;
          mediaItem.id = this._getNewId();
          this.messageItems.push(mediaItem);
          responseOptions = { status: 201 };
          break;
        case 'DELETE':
          const id = parseInt(request.url.split('/')[1], 10);
          this._deleteMessageItem(id);
          responseOptions = { status: 200 };
      }
      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }


  _deleteMessageItem(id) {
    let message  = this.messageItems.find(i => i.id === id);

    const index = -1;
    if(message !== undefined){
       this.messageItems.indexOf(message);
    }
    
    if (index >= 0) {
      this.messageItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this.messageItems.length > 0) {
      return Math.max.apply(Math, this.messageItems.map(messageItem => messageItem.id)) + 1;
    } else {
      return 1;
    }
  }
}
