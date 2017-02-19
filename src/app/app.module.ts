import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToDo } from '../pages/todo/todo';
import { TodoDetail } from '../pages/todo-detail/todo-detail';
import { ElasticModule } from 'angular2-elastic';

@NgModule({
  declarations: [
    MyApp,
    ToDo,
    TodoDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ElasticModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDo,
    TodoDetail
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
