import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageItemListComponent } from './message-item-list/message-item-list.component';

const routes: Routes = [
  { path: 'add', component: MessageFormComponent },
  { path: '', component: MessageItemListComponent },
  { path: ':priority', component: MessageItemListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
