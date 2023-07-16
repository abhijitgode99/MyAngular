import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  
  name: string='Abhijit';

  obj={
    fname:'abhijit',
    lname:'gode'
  }
  imageURL : string = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';
  isDisabled = false;
  

  department1:string='IT';

  constructor() { }

  ngOnInit() {
  }
  SaveData(){
    alert('Button Clicked');
  }
  department: string = 'Support';
}
