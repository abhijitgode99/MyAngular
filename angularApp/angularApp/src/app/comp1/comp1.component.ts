import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

export class Comp1Component implements OnInit {
  products = {};
  constructor() { 
    const objService = new Service1Service();
    this.products = objService.products;
  }

  ngOnInit() {
  }

}
