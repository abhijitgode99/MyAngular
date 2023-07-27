import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  isCorrect=true;
  isFormSubmitted=false;
  username = '';
  defaultCourseValue ='JavaScript';
  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
  ]

  formData = {
    username: '',
    email: '',
    course: '',
    country: '',
    state: '',
    gender:''
   }

  constructor() { }

  ngOnInit() {  
  }
  
  checkDomain(inputValue){
    console.log('inputvalue',inputValue)
    this.isCorrect=inputValue.includes('codemindtechnology.com');
    console.log(this.isCorrect)
  }
OnSubmit(form: NgForm) {
  this.isFormSubmitted=true;
    console.log('form submitted', form);
    let email = form.value.email;
    console.log('Email is', email);

    let country = form.value.address.country;
    console.log('user input country name is', country);

    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    
    // reser the form controls
    form.reset();
    this.defaultCourseValue='JavaScript';
  }
 
}
function checkDomain(event: Event) {
  throw new Error('Function not implemented.');
}

