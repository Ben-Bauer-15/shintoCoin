import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  transactions;
  coinValue;
  coinsOwned;
  constructor(){}

  ngOnInit(){
    this.transactions = []
    this.coinValue = 0
    this.coinsOwned = 0
  }
}
