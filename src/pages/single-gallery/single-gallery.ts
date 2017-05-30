import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { USMService } from '../../services/USMService';
import { Fabric } from '../../services/Fabric';

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
		private modalCtrl: ModalController,
		private Fabric: Fabric
	) {}

	ionViewDidLoad() {
		this.gallery = this.navParams.get('gallery');

		this.loadGallery( this.gallery.id ).then( data => {
			this.galleryData = data;

			for (var i = 0; i < data['length']; ++i) {
				this.galleryImgs.push({ url:data[i].sizes.large.source_url});
			}
		});

		// Send Fabric event
		this.Fabric.sendCustomEvent('Galerie', {galerie: this.gallery.title.rendered});
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

	showGallery(post, i) {
		let modal = this.modalCtrl.create(GalleryModal, {
			photos: this.galleryImgs,
			initialSlide: i
		});
		modal.present();
	}
}
