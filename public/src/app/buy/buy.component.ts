import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  numCoinsBought;
  coinValue;
  coinsOwned;
  constructor(private _root : AppComponent) { }

  ngOnInit() {
    this.numCoinsBought = ""
    this.coinValue = this._root.coinValue
    this.coinsOwned = this._root.coinsOwned
  }

  buy(){
    this.coinValue += parseInt(this.numCoinsBought)
    this._root.coinsOwned += parseInt(this.numCoinsBought)
    this._root.coinValue += parseInt(this.numCoinsBought)
    this.coinsOwned += parseInt(this.numCoinsBought)
    let id = Math.floor(Math.random() * 1000)
    this._root.transactions.push({action : 'Bought', amount : this.numCoinsBought, value : this.coinValue, id : id})
    this.numCoinsBought = ""
  }

}
