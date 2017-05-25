import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SinglePostPage } from '../single-post/single-post';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
    url: string = 'https://api-beta.usmontagnarde.fr/v3/posts';
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

	itemTapped(event, post) {
		this.nav.push(SinglePostPage, {
			post: post
		});
	}
}
