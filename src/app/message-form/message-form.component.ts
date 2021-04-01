import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  onSubmit(messageForm){
    console.log(messageForm);
  }

  onClear(messageForm){
    messageForm.resetForm();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
