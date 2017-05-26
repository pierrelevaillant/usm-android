import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

import { SinglePostPage } from '../single-post/single-post';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [USMService]
})
export class SearchPage {
    items: any;
	current_page: number = 1;
	searchQuery: '';

	constructor(public navCtrl: NavController, private http: Http, private USMService: USMService, private nav: NavController ) {}

    ionViewDidLoad() {
    	//
    }

    // Search components

    onInput(e) {
    	console.log(this.searchQuery);
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

}
