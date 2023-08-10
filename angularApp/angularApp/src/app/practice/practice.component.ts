import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  myString : string= 'Abhijit Rajesh Gode';
  str:string;
  constructor() {
  
    this.myString= 'Abhijit Rajesh Gode';
    this.str=this.myString.split('').reverse().join('')
    console.log(this.str)
  }
  
  ngOnInit() {
  };
}
