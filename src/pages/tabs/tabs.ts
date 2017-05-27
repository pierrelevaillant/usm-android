import { Component, ViewChild } from '@angular/core';
import { NavParams, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TeamsPage } from '../teams/teams';
import { LivePage } from '../live/live';
import { MediasPage } from '../medias/medias';

@Component({
  	templateUrl: 'tabs.html'
})
export class TabsPage {
	@ViewChild('pageTabs') tabRef: Tabs;

  	tab1Root = HomePage;
  	tab2Root = TeamsPage;
  	tab3Root = MediasPage;
  	tab4Root = LivePage;

  	activeTab: any;

  	constructor(
  		private navParams: NavParams
  	){
	    this.activeTab = navParams.get("tab")? navParams.get("tab") : 0;
  	}

  	ionViewDidLoad() {
  		//
  	}

  	tabsChange(e) {
  		this.activeTab = this.tabRef.getSelected().index;
  	}
}
