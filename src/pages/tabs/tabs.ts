import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LivePage } from '../live/live';
import { MediasPage } from '../medias/medias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = MediasPage;
  tab4Root = LivePage;

  constructor() {

  }
}
