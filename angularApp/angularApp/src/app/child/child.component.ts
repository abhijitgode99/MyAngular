import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() dataInput: string;

// Assignment Databinding
  // userName:string='';

  // isEmpty():boolean {
  //   return this.userName.length == 0;
  // }
  // reset(){
  //   this.userName='';
  // }
  @Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    console.log('Input data from parent', this.dataInput);
  }

  addToFood() {
    this.foodEvent.emit('Banana');
  }
}
