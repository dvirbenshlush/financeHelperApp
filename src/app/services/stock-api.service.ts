import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private http: HttpClient) { }
  stockPriceUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH';
  apikey: string = '2A366AFI16092FEJ'
  // params = new HttpParams().set("apikey", this.apikey); //Create new HttpParams

  getStockPrice(keywords: string) {
    const params = new HttpParams().set("apikey", this.apikey).set("keywords", keywords); //Create new HttpParams

    return this.http.get<any>(this.stockPriceUrl, {params: params}).subscribe(result=>{
      console.log('result is ' + JSON.stringify(result))
    });
  }
}
