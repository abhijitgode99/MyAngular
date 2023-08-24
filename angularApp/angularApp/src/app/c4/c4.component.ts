import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from '../utilityservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  userName = 'Codemind';

  fname="";
  mname="";
  lname="";
  userDetails;
  myGroup: FormGroup;
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

  
  updateUserName(uname){
    this.userName = uname.value;
   
  }
}
