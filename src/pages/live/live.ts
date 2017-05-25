import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
    url: string = 'https://api-beta.usmontagnarde.fr/social';
    social_items: any;
    loading: any;

	constructor(public loadingCtrl: LoadingController, private http: Http) {}

    ionViewDidLoad() {
        this.loadPosts().then( data => {
			this.social_items = data;
		});
    }

    loadPosts() {

		return new Promise(resolve => {

			this.presentLoadingDefault();

			this.http.get( this.url )
		    .map(res => res.json())
		    .subscribe(data => {
		      resolve( data );
		      this.loading.dismiss();
		    });

		});
	}

	presentLoadingDefault() {
		this.loading = this.loadingCtrl.create({
			content: 'Chargement...'
		});

		this.loading.present();
	}

	launch(url) {
	}

}
