import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {
  selectedProduct: string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(product){
    this.selectedProduct = product.target.value;
    console.log('ngswitch', product.target.value);
  }
}
