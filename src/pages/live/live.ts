import { Component } from '@angular/core';
import { IonicPage, LoadingController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
  providers: [USMService]
})
export class LivePage {
    social_items: any;
    loading: any;

	constructor(private platform: Platform, public loadingCtrl: LoadingController, private http: Http, private USMService: USMService) {}

    ionViewDidLoad() {
        this.loadPosts().then( data => {
			this.social_items = data;
		});
    }

    loadPosts() {
    	this.presentLoadingDefault();
		return new Promise(resolve => {
			this.USMService.getSocial().subscribe(
                data => {
                    resolve(data);
                    this.loading.dismiss();
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
		this.platform.ready().then(() => {
            cordova.InAppBrowser.open('google.fr', "_system", "location=true");
        });
	}

	doRefresh(refresher) {
		this.loadPosts().then( data => {
			this.social_items = data;
			refresher.complete();
		});
	}

}
