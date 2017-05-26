import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SingleGalleryPage } from '../single-gallery/single-gallery';

@IonicPage()
@Component({
  selector: 'page-medias',
  templateUrl: 'medias.html',
  providers: [USMService]
})
export class MediasPage {
    items: any;
	current_page: number = 1;
	loading: any;

	constructor(public nav: NavController, private http: Http, private USMService: USMService, private loadingCtrl: LoadingController) {}

    ionViewDidLoad() {
        this.loadPosts( this.current_page ).then( data => {
			this.items = data;
		});
    }

    loadPosts( current_page ) {
    	this.presentLoadingDefault();
		return new Promise(resolve => {
			this.USMService.getGalleries(current_page).subscribe(
                data => {
                    resolve(data.data);
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

	doRefresh(refresher) {
		this.loadPosts(this.current_page).then( data => {
			this.items = data;
			refresher.complete();
		});
	}

	loadMore(infiniteScroll) {
	    this.current_page++;

	    this.loadPosts( this.current_page ).then( items => {
	      	let length = items["length"];

	      	if( length === 0 ) {
	        	infiniteScroll.complete();
	        	return;
	      	}

	      	this.items = this.items.concat(items);

	      	infiniteScroll.complete();
	    });
	}

	itemTapped(event, gallery) {
		this.nav.push(SingleGalleryPage, {
			gallery: gallery
		});
	}

}
