import { TodoDetail } from '../todo-detail/todo-detail';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Item } from '../../models/item';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html'
})
export class ToDo {
  private items: Item[] = [
    { "id":1001, "title":"Make Bed", "description": "Upon waking up in the morning, one must make the bed prior to leaving the bedroom for the day.", "completed": true },
    { "id":1002, "title": "Eat Breakfast", "description": "6 pieces of bacon, 2 breakfast sausages, 2 scrambled eggs, 2 pieces of toast with butter, and a large glass of milk.", "completed": false },
    { "id":1003, "title": "Feed Dog", "description": "You had your breakfast, why wouldn't the dog want his?", "completed": true },
    { "id":1004, "title": "Brush Teeth", "description": "Brush your teeth young man", "completed": true }
  ];
  private completed: number;
  private total: number;
  private output: string;

  // default constructor
  constructor(public navCtrl: NavController) {
    this.total = this.items.length;
    this.completed = this.getCompleted();
    this.output = this.generateOutput();
  }

  // CRUD functions
  // ****************
  addNew() {
    this.navCtrl.push(TodoDetail);
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
    this.navCtrl.push(TodoDetail, item);

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

    if (this.total == 0 || remaining == 0) {
      output = "Congrats my dude, you're done!";
    }
    else {
      output = (remaining == 1) ? "1 item remaining!" : remaining + " items remaining!";
    }
    return output;
  }
}
