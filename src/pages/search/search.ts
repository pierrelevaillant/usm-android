import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SinglePostPage } from '../single-post/single-post';

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {
    items: any;
	current_page: number = 1;
	searchQuery: '';

	constructor(
        private nav: NavController,
        private http: Http,
        private viewCtrl: ViewController,
        private USMService: USMService
    ) {}

    ionViewDidLoad() {
    	//
    }

    // Search components

    onInput(e) {
    	this.searchPosts(this.searchQuery).then( data => {
			this.items = data['posts'];
		});
    }

    searchPosts( query ) {
		return new Promise(resolve => {
			this.USMService.searchPosts(query).subscribe(
                data => {
                    resolve(data.results); 
                },
                err => {}
            );
		});
	}

	postTapped(event, post) {
		this.nav.push(SinglePostPage, {
			post: post
		});
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
