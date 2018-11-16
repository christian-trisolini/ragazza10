import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PhrasePage} from "../phrase/phrase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(PhrasePage);
  }
}
