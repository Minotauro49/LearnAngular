import { Component} from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray = []

  ItemSelect(d) {
    this.todoArray.push(d.value);
    console.log(this.todoArray)
  }


  deleteItem(cont){
    this.todoArray.splice($("LI").index(cont),1);
  }


}
