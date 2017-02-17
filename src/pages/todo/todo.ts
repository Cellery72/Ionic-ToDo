import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html'
})
export class ToDo {
  private items: Item[] = [
    { "title": "Make Bed", "description": "Upon waking up in the morning, one must make the bed prior to leaving the bedroom for the day.", "completed": true },
    { "title": "Eat Breakfast", "description": "6 pieces of bacon, 2 breakfast sausages, 2 scrambled eggs, 2 pieces of toast with butter, and a large glass of milk.", "completed": false },
    { "title": "Feed Dog", "description": "You had your breakfast, why wouldn't the dog want his?", "completed": true },
    { "title": "Brush Teeth", "description": "Brush your teeth young man", "completed": true }
  ];
  private completed: number;
  private total: number;

  // default constructor
  constructor(public navCtrl: NavController) {
    this.total = this.items.length;
    this.completed = this.getCompleted();
  }

  // CRUD functions
  addItem(item: Item) {

  }
  removeItem(item: Item) {

  }
  completedChanged(){
    this.completed = this.getCompleted();
  }
  // utility functions
  openDetails() {
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
}
