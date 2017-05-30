import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import 'rxjs/add/operator/map';

import { USMService } from '../../services/USMService';
import { Fabric } from '../../services/Fabric';

@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html'
})
export class LivePage {
    social_items: any;
    loading: any;

	constructor(
		private iab: InAppBrowser,
		private loadingCtrl: LoadingController,
		private http: Http,
		private USMService: USMService,
		private Fabric: Fabric
	) {}

    ionViewDidLoad() {
    	this.presentLoadingDefault();
        this.loadPosts().then( data => {
			this.social_items = data;
			this.loading.dismiss();
		});

		// Send Fabric event
		this.Fabric.sendCustomEvent('Live', null);
    }

    loadPosts() {
		return new Promise(resolve => {
			this.USMService.getSocial().subscribe(
                data => {
                    resolve(data);
                },
                err => {}
            );
		});
	}

	presentLoadingDefault() {
		this.loading = this.loadingCtrl.create({
			content: 'Chargement...'
		});

		this.loading.present();
	}

	itemTapped(event, post) {
		this.iab.create(post.social.link);
	}

	doRefresh(refresher) {
		this.loadPosts().then( data => {
			this.social_items = data;
			refresher.complete();
		});
	}

}
