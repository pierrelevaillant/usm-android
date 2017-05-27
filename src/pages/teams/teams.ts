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

	constructor(
		private navCtrl: NavController,
		private actionSheetCtrl: ActionSheetController,
		private USMService: USMService
	){}

  	ionViewDidLoad() {
	    // Get teams
	    this.getTeams().then( data => {
	     	this.teams = data;
	     	//this.presentActionSheet();
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

	presentActionSheet() {
		let opt = {
			title: 'Selectionnez une équipe',
			buttons: []
		};
	
		for (var i = 0; i < this.teams['length']; ++i) {
			opt.buttons.push({
				text: this.teams[i].name,
				handler: () => {
					console.log(this.teams[i].name + ' clicked');
				}
			})
		};
	
	
		let actionSheet = this.actionSheetCtrl.create(opt);
		actionSheet.present();
	}

}
