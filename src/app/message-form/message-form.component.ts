import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService } from '../message.service';
import { lookupListToken } from '../provider';

@Component({
  selector: 'at-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  form : FormGroup;

   constructor(private formBuilder : FormBuilder,
     private messageService : MessageService,
     @Inject(lookupListToken) public lookupList) {

    }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
        Validators.required ,
        this.messageValidator      
      ])),
      message: this.formBuilder.control(''),
      isRead: this.formBuilder.control(false),
      isStarred: this.formBuilder.control(false),
      priority : this.formBuilder.control('')
    });
  }  

  onSubmit(form) {
    this.messageService.add(form)
    .subscribe();
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
