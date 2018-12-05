import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  userAnswer;
  correctAnswer
  constructor(private _root : AppComponent) { }

  ngOnInit() {
    this.userAnswer = ""
    this.correctAnswer = 8
  }

  mine(){
    if (this.userAnswer == this.correctAnswer){
      this._root.coinValue++
      this._root.coinsOwned++
      let id = Math.floor(Math.random() * 1000)
      this._root.transactions.push({action : 'Mined', amount : 1, value : this._root.coinValue, id : id})
    }
    this.userAnswer = ""
  }

}
