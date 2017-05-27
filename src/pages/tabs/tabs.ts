import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TeamsPage } from '../teams/teams';
import { LivePage } from '../live/live';
import { MediasPage } from '../medias/medias';

@Component({
  	templateUrl: 'tabs.html'
})
export class TabsPage {

  	tab1Root = HomePage;
  	tab2Root = TeamsPage;
  	tab3Root = MediasPage;
  	tab4Root = LivePage;

  	constructor() {
	
  	}
}
