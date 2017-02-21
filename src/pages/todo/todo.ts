import { TodoDetail } from '../todo-detail/todo-detail';
import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { Item } from '../../models/item';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html'
})
export class ToDo {
  private items: Item[] =
  [new Item("Eat Breakfast", "6 pieces of bacon, 2 breakfast sausages, 2 scrambled eggs, 2 pieces of toast with butter, and a large glass of milk.", false),
  new Item("Make Bed", "Upon waking up in the morning, one must make the bed prior to leaving the bedroom for the day.", true),
  new Item("Brush Teeth", "Brush your teeth young man", true),
  new Item("Feed Dog", "You had your breakfast, why wouldn't the dog want his?", true)];

  private completed: number;
  private total: number;
  private output: string;

  // default constructor
  constructor(public navCtrl: NavController, public events: Events) {


    this.total = this.items.length;
    this.completed = this.getCompleted();
    this.output = this.generateOutput();

    events.subscribe('item:added', (item) => {
      this.items.push(item);

      this.total = this.items.length;
      this.completed = this.getCompleted();
      this.output = this.generateOutput();

    });
    events.subscribe('item:removed', (item) => {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);

      this.total = this.items.length;
      this.completed = this.getCompleted();
      this.output = this.generateOutput();
    });
    events.subscribe('item:updated', (item) => {

    });
  }

  // CRUD functions
  // ****************
  addNew() {
    this.navCtrl.push(TodoDetail, {
      currentItem: new Item("", "", false),
      newItem: true
    });
  }
  removeItem(item: Item) {
  }

  // Events
  // ***************
  completedChanged() {
    this.completed = this.getCompleted();
    this.output = this.generateOutput();
  }


  // utility functions
  // *****************
  openDetails(item: Item) {

    this.navCtrl.push(TodoDetail, {
      currentItem: item,
      newItem: false
    });

  }
  getCompleted() {
    let counter: number = 0;
    for (let i = 0; i < this.items.length; ++i) {
      if (this.items[i].completed)
        counter++;
    }
    return counter;
  }
  getTextDecoration(truthy: boolean) {
    return (truthy) ? "line-through" : "none";
  }

  // Generates the output string of how many items remaining
  generateOutput() {
    let output: string;
    let remaining: number = this.total - this.completed;


    if (this.total == 0) {
      output = "Add some items to get working on!";
    } else if (remaining == 0) {
      output = "Congrats my dude, you're done!";
    }
    else {
      output = (remaining == 1) ? "1 item remaining!" : remaining + " items remaining!";
    }
    return output;
  }
}
