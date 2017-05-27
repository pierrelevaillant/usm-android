import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SingleGalleryPage } from '../single-gallery/single-gallery';

@IonicPage()
@Component({
  selector: 'page-medias',
  templateUrl: 'medias.html'
})
export class MediasPage {
    items: any;
	current_page: number = 1;
	loading: any;

	constructor(
		private nav: NavController,
		private http: Http,
		private USMService: USMService,
		private loadingCtrl: LoadingController
	) {}

    ionViewDidLoad() {
    	this.presentLoadingDefault();
        this.loadPosts( this.current_page ).then( data => {
			this.items = data;
            this.loading.dismiss();
		});
    }

    loadPosts( current_page ) {
		return new Promise(resolve => {
			this.USMService.getGalleries(current_page).subscribe(
                data => {
                    resolve(data.data);
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
		this.current_page = 1;
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
