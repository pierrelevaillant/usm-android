import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LivePage } from '../live/live';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = LivePage;

  constructor() {

  }
}
