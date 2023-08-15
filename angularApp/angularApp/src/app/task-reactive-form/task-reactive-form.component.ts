import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-reactive-form',
  templateUrl: './task-reactive-form.component.html',
  styleUrls: ['./task-reactive-form.component.css']
})
export class TaskReactiveFormComponent implements OnInit {
  isFormSubmitted=false;
  myForm: FormGroup;
  notAllowedNames = ['Test'];
  constructor() { 
    this.createForm()
  }

  ngOnInit() {
  }
  createForm() {
    this.myForm = new FormGroup({
      'projectname': new FormControl('', [Validators.required,this.NameNotAllowed.bind(this)]),     
      'email': new FormControl('',[Validators.required]),
      'status': new FormControl('Stable')
    })
  }

  OnSubmit() { 
    this.isFormSubmitted=true;
    console.log('Submit method called', this.myForm);
    console.log('form value', this.myForm.value);
    console.log();
    // this.resetForm()
  }

  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }
}
