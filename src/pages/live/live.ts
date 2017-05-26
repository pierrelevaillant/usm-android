import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Cordova } from 'ionic-native';
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

	constructor(public loadingCtrl: LoadingController, private http: Http, private USMService: USMService) {}

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
		Cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
	}

	doRefresh(refresher) {
		this.loadPosts().then( data => {
			this.social_items = data;
			refresher.complete();
		});
	}

}
