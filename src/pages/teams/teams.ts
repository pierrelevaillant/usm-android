import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController} from 'ionic-angular';
import { USMService } from '../../services/USMService';


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
	teams: any;
	teamSeason: any;
	teamsSegment: number = 1;

	constructor(
		private navCtrl: NavController,
		private actionSheetCtrl: ActionSheetController,
		private USMService: USMService
	){}

  	ionViewDidLoad() {
	    // Get teams
	    this.getTeams().then( data => {
	     	this.teams = data;

	     	this.getSeason(data[0].id).then( data => {
		     	this.teamSeason = data;
			});
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

	segmentChanged(e) {
		this.getSeason(e._value).then( data => {
	     	this.teamSeason = data;
		});
	}

}
