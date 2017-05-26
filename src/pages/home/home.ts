import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SinglePostPage } from '../single-post/single-post';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [USMService]
})
export class HomePage {
    items: any;
	current_page: number = 1;

	constructor(public navCtrl: NavController, private http: Http, private nav: NavController, private USMService: USMService ) {}

    ionViewDidLoad() {
        this.loadPosts(this.current_page).then( data => {
			this.items = data;
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

	itemTapped(event, post) {
		this.nav.push(SinglePostPage, {
			post: post
		});
	}
}
