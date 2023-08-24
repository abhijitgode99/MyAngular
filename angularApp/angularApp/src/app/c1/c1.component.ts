import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from '../utilityservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  
  userName = 'Codemind';
  test;

  fname="";
  mname="";
  lname="";
  userDetails;
  myGroup: FormGroup;
  isFormSubmitted=false;

  constructor(private utilityService: UtilityserviceService) { 
    this.createForm();
  }

  ngOnInit() {
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
      console.log('res from subject', res);
     })

     this.utilityService.userDetails.subscribe(res =>{
      this.userDetails=res;
      console.log('res from subject', this.userDetails);
      this.fname = this.userDetails.fname;
      this.mname = this.userDetails.mname;
      this.lname = this.userDetails.lname;
     })
  }

  createForm() {
    this.myGroup= new FormGroup({
      'fname' : new FormControl(''),
      'mname' : new FormControl(''),
      'lname' : new FormControl('')
    })
  }

  OnSubmit(myGroup) { 
    // console.log('Submit method called', this.myGroup);

    console.log('form value', this.myGroup.value.fname);
    this.utilityService.userDetails.next(this.myGroup.value)
  }

  updateUserName(uname){
    this.userName = uname.value;

    //console.log('Method called', uname.value);

    // we are inserting value inside observable
    this.utilityService.userName.next(uname.value);
  }

}