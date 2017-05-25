import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SingleGalleryPage } from '../single-gallery/single-gallery';

@IonicPage()
@Component({
  selector: 'page-medias',
  templateUrl: 'medias.html',
})
export class MediasPage {
	url: string = 'https://api-beta.usmontagnarde.fr/v3/galleries';
    items: any;
	current_page: any;

	constructor(public navCtrl: NavController, private http: Http, private nav: NavController ) {}

    ionViewDidLoad() {
    	this.current_page = '1';

        this.loadPosts( this.current_page ).then( data => {
			this.items = data;
		});
    }

    loadPosts( current_page ) {

		if( !current_page ) {
	      let current_page = '1';
	    }

		return new Promise(resolve => {

			this.http.get( this.url + '?page=' + current_page )
		    .map(res => res.json())
		    .subscribe(data => {
		      resolve( data.data );
		    });

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

	      for (var i = length - 1; i >= 0; i--) {
	        this.items.push( items[i] );
	      }

	      infiniteScroll.complete();
	    });
	}

	itemTapped(event, gallery) {
		this.nav.push(SingleGalleryPage, {
			gallery: gallery
		});
	}

}
