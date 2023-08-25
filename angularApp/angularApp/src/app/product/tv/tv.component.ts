import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

 tvs:any[] = [
    {
      imgUrl:"../../assets/images/sam.jpg",
      brand: "Samsung",
      model: "QLED Q80A",
      display_size: "65 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$1499"
    },
    {
      imgUrl:"../../assets/images/lg.jpg",
      brand: "LG",
      model: "OLED CX",
      display_size: "55 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$1699"
    },
    {
      imgUrl:"../../assets/images/sony.jpg",
      brand: "Sony",
      model: "Bravia X90J",
      display_size: "75 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$2499"
    },
    {
      imgUrl:"../../assets/images/tcl.jpg",
      brand: "TCL",
      model: "6-Series",
      display_size: "55 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$799"
    },
    {
      imgUrl:"../../assets/images/vizio.jpg",
      brand: "Vizio",
      model: "M-Series",
      display_size: "65 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$999"
    },
    {
      imgUrl:"../../assets/images/sam.jpg",
      brand: "Samsung",
      model: "QLED Q80A",
      display_size: "65 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$1499"
    },
    {
      imgUrl:"../../assets/images/lg.jpg",
      brand: "LG",
      model: "OLED CX",
      display_size: "55 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$1699"
    },
    {
      imgUrl:"../../assets/images/sony.jpg",
      brand: "Sony",
      model: "Bravia X90J",
      display_size: "75 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$2499"
    },
    {
      imgUrl:"../../assets/images/tcl.jpg",
      brand: "TCL",
      model: "6-Series",
      display_size: "55 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$799"
    },
    {
      imgUrl:"../../assets/images/vizio.jpg",
      brand: "Vizio",
      model: "M-Series",
      display_size: "65 inches",
      display_resolution: "4K Ultra HD",
      smart: true,
      price: "$999"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
