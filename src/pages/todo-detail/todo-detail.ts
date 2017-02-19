import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'todo-detail',
  templateUrl: 'todo-detail.html'
})
export class TodoDetail {

  private item: Item;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, navParams: NavParams) {
    if(navParams.data!=null)
      this.item = navParams.data;
   }

  goBack(){
    this.navCtrl.pop();
  }
  completedChanged(item: Item){
    console.log(item);
  }
}
