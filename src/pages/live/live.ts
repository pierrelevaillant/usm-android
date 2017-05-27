import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

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
		private USMService: USMService
	) {}

    ionViewDidLoad() {
    	this.presentLoadingDefault();
        this.loadPosts().then( data => {
			this.social_items = data;
			this.loading.dismiss();
		});
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
