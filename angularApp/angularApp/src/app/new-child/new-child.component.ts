import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {
 
  @Input() data;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
