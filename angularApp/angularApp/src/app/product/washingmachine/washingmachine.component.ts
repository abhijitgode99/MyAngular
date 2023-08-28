import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  objLaptop : any[] = [
    {
      imgUrl:"../../assets/images/dell-1.jpg",
      brand: "Dell",
      model: "XPS 13",
      processor: "Intel Core i7-1165G7",
      ram: "16GB LPDDR4X",
      storage: "512GB NVMe SSD",
      graphics: "Intel Iris Xe",
      display_size: "13.4 inches",
      display_resolution: "3840 x 2400",
      weight: "2.8 lbs",
      price: "$1299.99"
    },
    {
      imgUrl:"../../assets/images/apple.jpg",
      brand: "Apple",
      model: "MacBook Pro",
      processor: "Apple M1",
      ram: "8GB Unified Memory",
      storage: "256GB SSD",
      graphics: "Apple M1 GPU",
      display_size: "13.3 inches",
      display_resolution: "2560 x 1600",
      weight: "3.0 lbs",
      price: "$1299.00"
    },
    {
      imgUrl:"../../assets/images/hp.jpg",
      brand: "HP",
      model: "Spectre x360",
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "256GB PCIe SSD",
      graphics: "Intel Iris Xe",
      display_size: "15.6 inches",
      display_resolution: "1920 x 1080",
      weight: "4.2 lbs",
      price: "$999.99"
    },
    {
      imgUrl:"../../assets/images/asus.jpeg",
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      processor: "Intel Core i7-1165G7",
      ram: "16GB LPDDR4X",
      storage: "512GB NVMe SSD",
      graphics: "Intel Iris Xe",
      display_size: "14.0 inches",
      display_resolution: "2560 x 1440",
      weight: "2.49 lbs",
      price: "$1499.00"
    },    {
      imgUrl:"../../assets/images/lenovo.jpg",
      brand: "Asus",
      model: "ROG Zephyr G14",
      processor: "AMD Ryzen 9 5900HS",
      ram: "32GB DDR4",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA GeForce RTX 3060",
      display_size: "14.0 inches",
      display_resolution: "2560 x 1440",
      weight: "3.64 lbs",
      price: "$1799.99"
    },
    {
      imgUrl:"../../assets/images/dell-1.jpg",
      brand: "Dell",
      model: "XPS 13",
      processor: "Intel Core i7-1165G7",
      ram: "16GB LPDDR4X",
      storage: "512GB NVMe SSD",
      graphics: "Intel Iris Xe",
      display_size: "13.4 inches",
      display_resolution: "3840 x 2400",
      weight: "2.8 lbs",
      price: "$1299.99"
    },
    {
      imgUrl:"../../assets/images/apple.jpg",
      brand: "Apple",
      model: "MacBook Pro",
      processor: "Apple M1",
      ram: "8GB Unified Memory",
      storage: "256GB SSD",
      graphics: "Apple M1 GPU",
      display_size: "13.3 inches",
      display_resolution: "2560 x 1600",
      weight: "3.0 lbs",
      price: "$1299.00"
    },
    {
      imgUrl:"../../assets/images/hp.jpg",
      brand: "HP",
      model: "Spectre x360",
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "256GB PCIe SSD",
      graphics: "Intel Iris Xe",
      display_size: "15.6 inches",
      display_resolution: "1920 x 1080",
      weight: "4.2 lbs",
      price: "$999.99"
    },
    {
      imgUrl:"../../assets/images/asus.jpeg",
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      processor: "Intel Core i7-1165G7",
      ram: "16GB LPDDR4X",
      storage: "512GB NVMe SSD",
      graphics: "Intel Iris Xe",
      display_size: "14.0 inches",
      display_resolution: "2560 x 1440",
      weight: "2.49 lbs",
      price: "$1499.00"
    },    {
      imgUrl:"../../assets/images/lenovo.jpg",
      brand: "Asus",
      model: "ROG Zephyr G14",
      processor: "AMD Ryzen 9 5900HS",
      ram: "32GB DDR4",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA GeForce RTX 3060",
      display_size: "14.0 inches",
      display_resolution: "2560 x 1440",
      weight: "3.64 lbs",
      price: "$1799.99"
    },
    // Add more laptop entries here
  ]
  constructor() { }

  ngOnInit() {
  }

}
