import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageItemListComponent } from './message-item-list/message-item-list.component';
import { StarredDirective } from './starred.directive';
import { TextTruncatePipe } from './text-truncate.pipe';
import { MessageCounterPipe } from './message-counter.pipe';
import { MessageFormComponent } from './message-form/message-form.component';
import { lookupListToken, lookupList } from './provider';
import { MockXhrBackend } from './mock-xhr-backend';

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessageItemListComponent,
    StarredDirective,
    TextTruncatePipe,
    MessageCounterPipe,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupList },
    { provide: HttpXhrBackend, useClass: MockXhrBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://github.com/coursefiles/angular-essential-training/tree/completed
