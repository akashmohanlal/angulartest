import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  // templateUrl: './app.component.html',
  template: `<h1>This is my first app</h1>
  <h2>The app is a message reader with a form</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to angular';
}
