import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';
import { TradeHomeComponent } from './trade-home/trade-home.component';

@NgModule({
  declarations: [
    AppComponent,
    StockSentimentComponent,
    TradeHomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
