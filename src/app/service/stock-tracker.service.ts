import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {

  constructor(private httpClient: HttpClient) { }
  getStockData(url:string){
return this.httpClient.get(url);

  }
  getStockDetails(url:string){
    return this.httpClient.get(url);
    
      }
      getStockSentiment(stockSymbol:string){
        let url =`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${stockSymbol}&from=2022-01-01&to=2022-09-26&token=bu4f8kn48v6uehqi3cqg`
  
        return this.httpClient.get(url);
        
          }
}
