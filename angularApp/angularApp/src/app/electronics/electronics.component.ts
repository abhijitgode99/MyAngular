import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

   electronicDevices = [
    {
      name: "Smartphone",
      imgUrl: "../../assets/images/smartphone.jpg"
    },
    {
      name: "Laptop",
      imgUrl: "../../assets/images/apple.jpg"
    },
    {
      name: "Tablet",
      imgUrl: "../../assets/images/huawei_tablet.jpg"
    },
    {
      name: "Smart TV",
      imgUrl: "../../assets/images/lg.jpg"
    },
    {
      name: "Smart Speaker",
      imgUrl: "../../assets/images/smartspeker.jpg"
    },
    {
      name: "Smartwatch",
      imgUrl: "../../assets/images/smartwatch.jpg"
    },
    {
      name: "Gaming Console",
      imgUrl: "https://example.com/gaming-console.jpg"
    },
    {
      name: "Camera",
      imgUrl: "https://example.com/camera.jpg"
    },
    {
      name: "Headphones",
      imgUrl: "https://example.com/headphones.jpg"
    },
    {
      name: "Wireless Earbuds",
      imgUrl: "https://example.com/wireless-earbuds.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
