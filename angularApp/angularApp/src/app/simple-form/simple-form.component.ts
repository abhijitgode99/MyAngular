import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  
  username = '';
  defaultCourseValue = 'JavaScript';

  constructor() { }

  ngOnInit() {
  }

OnSubmit(form: NgForm) {
    console.log('form submitted', form);
    let email = form.value.email;
    console.log('Email is', email);
    let country = form.value.address.country;
    console.log('user input country name is', country)
  }
}
