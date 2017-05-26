import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-single-gallery',
  templateUrl: 'single-gallery.html',
  providers: [USMService]
})
export class SingleGalleryPage {
  	gallery: any;
  	galleryData: any;

  	constructor(public navCtrl: NavController, private http: Http, private USMService: USMService, public navParams: NavParams) {}

  	ionViewDidLoad() {
		this.gallery = this.navParams.get('gallery');

		this.loadGallery( this.gallery.id ).then( data => {
			this.galleryData = data;
		});
  	}

  	loadGallery(id) {
		return new Promise(resolve => {
			this.USMService.getGallery(id).subscribe(
	            data => {
	                resolve(data); 
	            },
	            err => {}
	        );
		});
	}

	showGallery(post) {
		//
	}
}
