import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, PopoverController} from 'ionic-angular';
import { USMService } from '../../services/USMService';

import { PopSeasonsPage } from '../pop-seasons/pop-seasons';
import { SingleGamePage } from '../single-game/single-game';

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
 	currentTeam: number;
 	currentSeason: number;
 	segment: string;
 	lastMatchId: any;

 	constructor(
 		private navCtl: NavController,
 		private actionSheetCtrl: ActionSheetController,
 		private popoverCtrl: PopoverController,
 		private USMService: USMService
 		){}

 	ionViewDidLoad() {

 		this.getSeasons().then( data => {
 			this.seasons = data;
 			this.currentSeason = data[data['length'] - 1].season;

 			// Get teams
 			this.getTeams().then( data => {
 				this.teams = data;
 				this.segment = String(data[0].id);
 				this.currentTeam = data[0].id;

 				this.getSeason(data[0].id, this.currentSeason).then( data => {
 					this.teamSeason = data;

 					this.getLastMatch(this.currentTeam).then( data => {
 						this.lastMatchId = data[0].id;
 						let b = document.getElementById(this.lastMatchId);
 						if (b) b.scrollIntoView({ behavior: "instant" })
 					});
 				});
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

 	getLastMatch(id) {
 		return new Promise(resolve => {
 			this.USMService.getRecap(id).subscribe(
 				data => {
 					resolve(data.data);
 				},
 				err => {}
 				);
 		});
 	}

 	// Functions
 	getSeason(id, season) {
 		return new Promise(resolve => {
 			this.USMService.getSeason(id, season).subscribe(
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

 	gameTapped(event, game) {
 		this.navCtl.push(SingleGamePage, {
 			game: game
 		});
 	}

 	segmentChanged(e) {
 		this.currentTeam = parseInt(e._value);
 		this.getSeason(this.currentTeam, this.currentSeason).then( data => {
 			this.teamSeason = data;

 			this.getLastMatch(this.currentTeam).then( data => {
 				this.lastMatchId = data[0].id;
 				let b = document.getElementById(this.lastMatchId);
 				if (b) b.scrollIntoView({ behavior: "instant" })
 			});
 		});
 	}

 	seasonchanged() {
 		this.getSeason(this.currentTeam, this.currentSeason).then( data => {
 			this.teamSeason = data;
 		});
 	}

 	seasonsPopover(e) {
 		let popover = this.popoverCtrl.create(PopSeasonsPage,{
 			seasons: this.seasons,
 			currentSeason: this.currentSeason
 		});
 		popover.present({
 			ev: e
 		})
 		popover.onDidDismiss(season => {
 			this.currentSeason = season;
 			this.seasonchanged();
 		});
 	}

 }
