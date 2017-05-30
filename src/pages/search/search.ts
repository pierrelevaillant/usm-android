import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { USMService } from '../../services/USMService';
import { Fabric } from '../../services/Fabric';

import { SinglePostPage } from '../single-post/single-post';

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {
    @ViewChild('searchBar') searchBar: any;

    items: any;
	current_page: number = 1;
	searchQuery: '';

    searchHistory: Array<any> = [];

	constructor(
        private nav: NavController,
        private http: Http,
        private viewCtrl: ViewController,
        private storage: Storage,
        private USMService: USMService,
        private Fabric: Fabric
    ) {}

    ionViewDidLoad() {
    	this.storage.get('searchHistory').then((data) => {
            if (data) this.searchHistory = JSON.parse(data);
        });
    }

    ionViewWillLeave() {
        this.storage.set('searchHistory', JSON.stringify(this.searchHistory));
    }

    // Search components

    onInput(e) {
    	this.searchPosts(this.searchQuery).then( data => {
			this.items = data['posts'];

            // Send Fabric event
            this.Fabric.sendCustomEvent('Search', {search: this.searchQuery});
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
        if (this.searchHistory.filter(history => history.title === post.title.rendered).length == 0) this.searchHistory.push({title:post.title.rendered});
		this.nav.push(SinglePostPage, {
			post: post
		});
	}

    historyTapped(e, post) {
        this.searchQuery = post.title;
        this.onInput(e);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
