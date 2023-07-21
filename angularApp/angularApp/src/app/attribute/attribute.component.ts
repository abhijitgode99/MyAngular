import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  peoples: any[] = [
    {'name': 'Jack', 'country': 'UK'},
    {'name': 'Sumit', 'country': 'USA'},
    {'name': 'Anup', 'country': 'HK'},
    {'name': 'Tom', 'country': 'UK'},
    {'name': 'Surya', 'country': 'USA'}
  ]
  colorVal = 'blue';

  constructor() { }

  ngOnInit() {
  }

}
