import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction;
  constructor(private _route : ActivatedRoute, private _router : Router, private _root : AppComponent) { }

  ngOnInit() {
    this.transaction = {}
    var self = this
    console.log("anyone?")
    this._route.params.subscribe((params : Params) => {
      for (var i = 0; i < this._root.transactions.length; i++){
        if (this._root.transactions[i].id == params['id']){
          self.transaction = this._root.transactions[i]
        }
      }
    })
  }

}
