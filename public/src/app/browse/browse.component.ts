import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  transactions;
  constructor(private _root : AppComponent) { }

  ngOnInit() {
    this.transactions = this._root.transactions
  }

}
