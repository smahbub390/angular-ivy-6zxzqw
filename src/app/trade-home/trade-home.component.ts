import { Component, OnInit } from '@angular/core';
import { from, mergeAll, Subscription } from 'rxjs';
import { StockTrackerService } from '../service/stock-tracker.service';


@Component({
  selector: 'app-trade-home',
  templateUrl: './trade-home.component.html',
  styleUrls: ['./trade-home.component.css']
})
export class TradeHomeComponent implements OnInit {

  title = 'Stock';
  stockSymbol: string = "";
  enteredSymbols: Array<string> = [];
  getResponse: Array<any> = []; 
  result: Array<any> = [];
  dataLoaded : boolean = false;
  searchStockUrl:string = 'https://finnhub.io/api/v1/search?token=bu4f8kn48v6uehqi3cqg&q=';
  detailsStockUrl:string = 'https://finnhub.io/api/v1/quote?token=bu4f8kn48v6uehqi3cqg&symbol=';
 
  subscriptionData$!: Subscription;
  subscriptionDetails$!: Subscription;
  constructor(private stockTrackerService: StockTrackerService) { }
  getStockDetails() {
    this.result =[];
    this.getResponse=[];
    this.dataLoaded= true;
    if(this.enteredSymbols.indexOf(this.stockSymbol.toUpperCase())<0){
    this.enteredSymbols.push(this.stockSymbol.toUpperCase());
    localStorage.setItem('stockSymbols', JSON.stringify(this.enteredSymbols));
    }
    //store in localstorage
   
    //get from local Storage
    this.getStockData()
    
  }

  removeStock(index: number) {
    this.result.splice(index, 1);
    this.enteredSymbols.splice
    localStorage.setItem('stockSymbols', JSON.stringify(this.enteredSymbols));
  }

  getMoreDetails(response: any) {
   
    this.subscriptionDetails$ = this.stockTrackerService.getStockDetails(this.detailsStockUrl + response.symbol).subscribe((data: any) => {
      this.result.push({ "data": response, "details": data });
    })

  }
  getStockData(){
    
    let getStockSymbols = localStorage.getItem('stockSymbols');
    let stockSybols: Array<string> = getStockSymbols? JSON.parse(getStockSymbols):[];
  
    // get response for each stock symtol
    stockSybols.forEach(element => {
      this.getResponse.push(this.stockTrackerService.getStockData(this.searchStockUrl + element));
    }); 

// Subscribe to observable
   this.subscriptionData$ = from(this.getResponse).pipe(mergeAll()).subscribe((val: any) => { 
      if (val && val.result && val.result[0]) {
        this.dataLoaded= false;
        // Make another call to second url to get more info
        this.getMoreDetails(val.result[0]);
        

      }
    })
  } 
  ngOnDestroy(){
    
    this.subscriptionData$.unsubscribe();
    this.subscriptionDetails$.unsubscribe();
  }
  ngOnInit(): void {
    this.getStockData();
  }
}
