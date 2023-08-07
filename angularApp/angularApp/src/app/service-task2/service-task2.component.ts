import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-service-task2',
  templateUrl: './service-task2.component.html',
  styleUrls: ['./service-task2.component.css']
})
export class ServiceTask2Component implements OnInit {
  DOB: number;
  ageIs:number;
  diplay:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  calculate(form: NgForm){
    //console.log(form)
    this.DOB=form.value.dob;

    const objService = new Service1Service();
    this.ageIs = objService.caluclateAge(this.DOB);
    //console.log('your age',this.ageIs)
    this.diplay=true;
  }
}
