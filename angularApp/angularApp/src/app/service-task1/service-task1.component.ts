import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service1Service } from '../Services/service1.service';

@Component({
  selector: 'app-service-task1',
  templateUrl: './service-task1.component.html',
  styleUrls: ['./service-task1.component.css']
})
export class ServiceTask1Component implements OnInit {
  DOB: number;
  ageIs:number;
  diplay:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  calculate(form: NgForm){
    console.log(form)
    this.DOB=form.value.dob;

    const objService = new Service1Service();
    this.ageIs = objService.caluclateAge(this.DOB);
    console.log('your age',this.ageIs)
    this.diplay=true;
  }
}
