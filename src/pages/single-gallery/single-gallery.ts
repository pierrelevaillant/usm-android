import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-single-gallery',
  templateUrl: 'single-gallery.html',
})
export class SingleGalleryPage {
  url: string = 'https://api-beta.usmontagnarde.fr/v3/galleries';
  gallery: any;
  galleryData: any;

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams) {}

  ionViewDidLoad() {
	this.gallery = this.navParams.get('gallery');

	this.loadGallery( this.gallery.id ).then( data => {
		this.galleryData = data;
	});

  }

  loadGallery( gallery_id ) {

	return new Promise(resolve => {

		this.http.get( this.url + '/' + gallery_id )
	    .map(res => res.json())
	    .subscribe(data => {
	      resolve( data );
	    });

	});
	}

}
