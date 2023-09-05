import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  constructor(private _httpClient: HttpClient) { }

  GetYahooFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '9b806c102emshddc858756e4325bp182ac5jsn590f1e4b256a',
       'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    })
   return this._httpClient.get(this.url, {headers: headers});
  }

}