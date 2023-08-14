import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-reactive-form',
  templateUrl: './task-reactive-form.component.html',
  styleUrls: ['./task-reactive-form.component.css']
})
export class TaskReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  createForm() {
    this.myForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),     
      'email': new FormControl(),
      'status': new FormControl('Stable')
    })
  }
}
