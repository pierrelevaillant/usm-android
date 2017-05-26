import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SearchPage } from '../search/search';
import { SinglePostPage } from '../single-post/single-post';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [USMService]
})
export class HomePage {
    items: any;
	current_page: number = 1;
	loading: any;

	constructor(public modalCtrl: ModalController, private loadingCtrl: LoadingController, public navCtrl: NavController, private http: Http, private nav: NavController, private USMService: USMService ) {}

    ionViewDidLoad() {
        this.loadPosts(this.current_page).then( data => {
			this.items = data;
		});
    }

    loadPosts( current_page ) {
    	this.presentLoadingDefault();
		return new Promise(resolve => {
			this.USMService.getPosts(current_page).subscribe(
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
