import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../Services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  newArray :any=[];
  news:any;
  quotes:any;
  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {                                 
    this.rapidapiService.GetYahooFinance().subscribe(res => {
      console.log('from rapid api', res);
      this.newArray=res;
      this.news=this.newArray.news.map((element)=>{
        return element;
      });
      console.log(this.news)

      this.quotes=this.newArray.quotes.map((element)=>{
        return element;
      });
      // console.log(this.newArray[0].news.link)
      // this.newArray=res;
      // this.newArray=this.newArray.map((element)=>{
      //   return element;;
      // });
    })
  }

  GetMarketData() {
    this.rapidapiService.getDataFormMarket().subscribe(res => {
      console.log('rapid market data', res);
    })
  }

  getMovers() {
    this.rapidapiService.getMovers().subscribe(res => {
      console.log('get movers', res);
    })
  }
}
