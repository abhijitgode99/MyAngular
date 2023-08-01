import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]
  myForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email] )
      }),     
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male')
    })
  }

  OnSubmit() {
    console.log('Submit method called', this.myForm);
  }
}