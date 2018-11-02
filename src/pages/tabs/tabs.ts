import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PhrasePage} from "../phrase/phrase";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PhrasePage;

  constructor() {

  }
}
