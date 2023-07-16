import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() dataInput: string;

// Assignment Databinding
  userName:string='';

  isEmpty():boolean {
    return this.userName.length == 0;
  }
  reset(){
    this.userName='';
  }
  
  constructor() {}

  ngOnInit() {
    console.log('Input data from parent', this.dataInput);
  }
}
