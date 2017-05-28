import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SearchPage } from '../search/search';
import { SinglePostPage } from '../single-post/single-post';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
    items: any;
    matchs: any;
	current_page: number = 1;
	loading: any;

	constructor(
		private modalCtrl: ModalController,
		private loadingCtrl: LoadingController,
		private nav: NavController,
		private http: Http,
		private USMService: USMService 
	) {}

    ionViewDidLoad() {
    	this.presentLoadingDefault();
        
        // Get posts
        this.loadPosts(this.current_page).then( data => {
			this.items = data;
			this.loading.dismiss();
		});

        // Get team A recap
        this.getRecap().then( data => {
			this.matchs = data;
		});
    }

    loadPosts( current_page ) {
		return new Promise(resolve => {
			this.USMService.getPosts(current_page).subscribe(
                data => {
                    resolve(data.data);
                },
                err => {}
            );
		});
	}

    getRecap() {
		return new Promise(resolve => {
			this.USMService.getRecap(1).subscribe(
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

	loadMore(infiniteScroll) {

	    this.current_page++;

	    this.loadPosts( this.current_page ).then( items => {
			let length = items["length"];

			if( length === 0 ) {
				infiniteScroll.complete();
				return;
			}

			this.items = this.items.concat(items)
	      	infiniteScroll.complete();
	    });
	}

	doRefresh(refresher) {
		this.current_page = 1;
		this.loadPosts(this.current_page).then( data => {
			this.items = data;
			refresher.complete();
		});
	}

	itemTapped(event, post) {
		this.nav.push(SinglePostPage, {
			post: post
		});
	}

	openSearchPage() {
		let modal = this.modalCtrl.create(SearchPage);
    	modal.present();
	}
}
