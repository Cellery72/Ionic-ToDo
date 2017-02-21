import { Events, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'todo-detail',
  templateUrl: 'todo-detail.html'
})
export class TodoDetail implements OnChanges {

  @Input() item: Item;
  private newItem: boolean;
  private changed: boolean = false;
  private initialTitle: string;
  private initialDescription: string;
  private initialCompletion: boolean;
  private date: string;

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public events: Events, public navCtrl: NavController, navParams: NavParams) {
    if (navParams.data != null) {
      this.item = navParams.data["currentItem"];
      this.newItem = navParams.data["newItem"];
      this.initialTitle = this.item.title;
      this.initialDescription = this.item.description;
      this.initialCompletion = !this.item.completed;
      this.date = this.item._startString;
    }
  }


  // C(R)UD Functions
  private addItem() {
    if (this.item.title === "") {

      let prompt = this.alertCtrl.create({
        title: 'Ooops, forgot to give it a title!',
        message: "Give a name for the incredible task you're about to endure",
        inputs: [
          {
            name: 'title',
            placeholder: 'Fend off dragons'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => { }
          },
          {
            text: 'Save',
            handler: data => {
              if (data.title === "") {
                this.addItem();
              }
              else {
                this.item.title = data.title;
                this.events.publish('item:added', this.item);
                this.navCtrl.pop();
              }
            }
          }
        ]
      });
      prompt.present();

    }
    else {
      this.events.publish('item:added', this.item);
      this.navCtrl.pop();
    }
  }
  private deleteItem() {
    this.events.publish('item:removed', this.item);
    this.navCtrl.pop();
  }
  private updateItem() {
    this.events.publish('item:updated', this.item)
    this.navCtrl.pop();
  }

  ngOnChanges(changes: SimpleChanges) : void {
    console.log(changes);
  }
  // Events
  completedChanged(event) {
    this.changed = this.compare(this.item);
    console.log(this.item);
    console.log(this.compare(this.item));
  }

  // Navigation
  goBack() {
    this.navCtrl.pop();
  }

  // Utilities
  compare(item1: Item) {
    if ((item1.title === this.initialTitle) && (item1.completed === this.initialCompletion)) {
      if ((item1._startString === this.date) && (item1.description === this.initialDescription)) {
        return true;
      }
    }
    else
      return false;
  }
}
