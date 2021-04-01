import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'at-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  form : FormGroup;

   constructor() {
    }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required ,
        this.messageValidator      
      ])),
      message: new FormControl(''),
      isRead: new FormControl(false),
      isStarred: new FormControl(false) 
    });
  }  

  onSubmit(form) {
    console.log(form);
  }

  onClear(form) {
    form.reset();
  }

  messageValidator(control: FormControl){
    if(control.value?.toString().includes('test')){
      return {title : 'The title field must not contain the test name'};
    }  
    
    return null;
    
  }

}
