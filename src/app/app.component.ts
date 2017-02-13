import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ToDo } from '../pages/todo/todo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = ToDo;

  constructor(platform: Platform, private app: App) {
    platform.ready().then(() => {
      StatusBar.hide();
      Splashscreen.hide();
    });
  }
}
