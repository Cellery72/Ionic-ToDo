import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ToDo } from '../pages/todo/todo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = ToDo;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
