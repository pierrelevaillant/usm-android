import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, PopoverController} from 'ionic-angular';
import { USMService } from '../../services/USMService';

import { PopSeasonsPage } from '../pop-seasons/pop-seasons';

/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html'
})
export class TeamsPage {
	seasons: any;
	teams: any;
	teamSeason: any;
	teamsSegment: number;

	constructor(
		private navCtrl: NavController,
		private actionSheetCtrl: ActionSheetController,
		private popoverCtrl: PopoverController,
		private USMService: USMService
	){}

  	ionViewDidLoad() {
	    // Get teams
	    this.getTeams().then( data => {
	     	this.teams = data;
	     	this.teamsSegment = data[0].id;

	     	this.getSeason(data[0].id).then( data => {
		     	this.teamSeason = data;
			});
		});

		this.getSeasons().then( data => {
	     	this.seasons = data;
		});
	}

	// Functions
	getTeams() {
		return new Promise(resolve => {
			this.USMService.getTeams().subscribe(
                data => {
                    resolve(data.data); 
                },
                err => {}
            );
		});
	}

	// Functions
	getSeason(id) {
		return new Promise(resolve => {
			this.USMService.getSeason(id).subscribe(
                data => {
                    resolve(data.data); 
                },
                err => {}
            );
		});
	}

	// Functions
	getSeasons() {
		return new Promise(resolve => {
			this.USMService.getSeasons().subscribe(
                data => {
                    resolve(data.data); 
                },
                err => {}
            );
		});
	}

	segmentChanged(e) {
		this.getSeason(e._value).then( data => {
	     	this.teamSeason = data;
		});
	}

	seasonsPopover(e) {
		let popover = this.popoverCtrl.create(PopSeasonsPage,{
			seasons: this.seasons
		});
    	popover.present({
	      ev: e
	    })
	}

}
