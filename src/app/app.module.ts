import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';


var firebaseConfig = {
    apiKey: "AIzaSyAyHYGErW4NR6bc9MRm5rY2-zhqYoWwtNs",
    authDomain: "seniorproject-spring2020.firebaseapp.com",
    databaseURL: "https://seniorproject-spring2020.firebaseio.com",
    projectId: "seniorproject-spring2020",
    storageBucket: "seniorproject-spring2020.appspot.com",
    messagingSenderId: "300385909444",
    appId: "1:300385909444:web:953415fbff078ef0166791",
    measurementId: "G-9E1GNY8Q1Y"
  };



@NgModule({
  imports:  [ BrowserModule, FormsModule, AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule ],
  declarations: [ routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
