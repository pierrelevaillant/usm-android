import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
    currentSeason: string;

  	constructor(
  		public navCtrl: NavController,
        public navParams: NavParams,
  		public viewCtrl: ViewController,
  	) {}

  	ngOnInit() {
		if (this.navParams.data) {
            this.seasons = this.navParams.data.seasons;
			this.currentSeason = String(this.navParams.data.currentSeason);
		}
	}

  	ionViewDidLoad() {
  		//
  	}

    seasonChanged() {
        this.viewCtrl.dismiss(parseInt(this.currentSeason));
    }

}
