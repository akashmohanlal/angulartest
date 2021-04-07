import { HttpBackend, HttpEvent, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, Observer } from "rxjs";

export class MockXhrBackend implements HttpBackend {
  private messageItems = [
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
      isStarred : true,
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

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
       return new Observable((responseObserver : Observer<HttpResponse<any>>) =>{
           
       })
    }

}
