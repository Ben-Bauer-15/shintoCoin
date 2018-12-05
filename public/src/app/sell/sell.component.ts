import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  coinsOwned;
  coinValue;
  coinsToSell;
  constructor(private _root : AppComponent) { }

  ngOnInit() {
    this.coinValue = this._root.coinValue
    this.coinsOwned = this._root.coinsOwned
    this.coinsToSell = ""
  }

  sell(){
    if (this.coinsOwned - this.coinsToSell > 0){
      this.coinsOwned -= this.coinsToSell
      this.coinValue -= this.coinsToSell
      this._root.coinsOwned -= this.coinsToSell
      this._root.coinValue -= this.coinsToSell
      let id = Math.floor(Math.random() * 1000)
      this._root.transactions.push({action : 'Sold', amount : this.coinsToSell, value : this.coinValue, id : id})
    }
    this.coinsToSell = ""
  }



}
