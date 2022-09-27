import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';
import { TradeHomeComponent } from './trade-home/trade-home.component';

const routes: Routes = [
  { path: 'sentiment/:symbol', component: StockSentimentComponent },
  { path: '', component: TradeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
