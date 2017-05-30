import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { USMService } from '../../services/USMService';
import 'rxjs/add/operator/map';
import { GalleryModal } from 'ionic-gallery-modal';

@IonicPage()
@Component({
  selector: 'page-single-gallery',
  templateUrl: 'single-gallery.html'
})
export class SingleGalleryPage {
  	gallery: any;
  	galleryImgs: any[] = [];
  	galleryData: any;

  	constructor(
  		private navCtrl: NavController,
  		private navParams: NavParams,
  		private http: Http,
  		private USMService: USMService,
  		private modalCtrl: ModalController
  	) {}

  	ionViewDidLoad() {
		this.gallery = this.navParams.get('gallery');

		this.loadGallery( this.gallery.id ).then( data => {
			this.galleryData = data;

			for (var i = 0; i < data['length']; ++i) {
				this.galleryImgs.push({ url:data[i].sizes.large.source_url});
			}

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
		console.log(this.galleryImgs);
		let modal = this.modalCtrl.create(GalleryModal, {
  			photos: this.galleryImgs,
  			initialSlide: 0
		});
		modal.present();
	}
}
