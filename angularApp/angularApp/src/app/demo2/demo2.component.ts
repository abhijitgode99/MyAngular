import { Component, OnInit } from '@angular/core';
import { Course } from '../models/courses';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  isCheckBoxSelected : boolean=false;
  myvalue : string;

  onCheckBoxChange(event){
    if(this.isCheckBoxSelected)
      this.myvalue=event.target.value;
    else
    this.myvalue='';
  }

  title : string = 'Top 3 Courses';
  courses: Course[] = [
   {courseName: 'Angular', trainerName:'Dhanyesh Sir'},
   {courseName: 'html,css,javaScript', trainerName:'Gajanan Sir'},
   {courseName: 'Bootstrap', trainerName:'Ramesh Sir'}   
  ]
  constructor() { }
  
  ngOnInit() {
  }


  
}
