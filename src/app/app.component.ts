import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';

  itemValue = '';
  items: Observable<any[]>;
 
   constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
 
  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
}
