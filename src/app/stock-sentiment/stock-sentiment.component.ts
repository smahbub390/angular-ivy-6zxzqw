import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockTrackerService } from '../service/stock-tracker.service';
import { Month } from '../const';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.css']
})
export class StockSentimentComponent implements OnInit {
data:Array<any> =[];
month:Array<string> = Month;
symbol:string = this.route.snapshot.params['symbol'];
  constructor(private stockTrackerService: StockTrackerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stockTrackerService.getStockSentiment(this.symbol).subscribe((res:any) =>{
      this.data = res.data;
    
    })
  }

}
