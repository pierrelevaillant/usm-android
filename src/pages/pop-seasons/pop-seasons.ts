import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopSeasonsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  	selector: 'page-pop-seasons',
  	templateUrl: 'pop-seasons.html',
})
export class PopSeasonsPage {

	seasons: any;

  	constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  	) {}

  	ngOnInit() {
		if (this.navParams.data) {
			this.seasons = this.navParams.data.seasons;
		}
	}

  	ionViewDidLoad() {
  		//
  	}

}
