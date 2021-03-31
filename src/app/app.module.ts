import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageItemListComponent } from './message-item-list/message-item-list.component';
import { StarredDirective } from './starred.directive';

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessageItemListComponent,
    StarredDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
