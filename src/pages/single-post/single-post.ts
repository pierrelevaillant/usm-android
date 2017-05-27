import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { USMService } from '../../services/USMService';

@IonicPage()
@Component({
  	selector: 'page-single-post',
  	templateUrl: 'single-post.html',
})
export class SinglePostPage {
  	post: any;

  	constructor(
  		private navCtrl: NavController,
  		private navParams: NavParams,
  		private socialSharing: SocialSharing,
      private USMService: USMService
  	) {}

	ionViewDidLoad() {
		this.post = this.navParams.get('post');
	}

	regularShare(){
		let image = this.post.featured_media ? this.post.featured_media.sizes.large.source_url : null;
		this.socialSharing.share(this.post.title.rendered, null, image, this.post.link); 
	}

  loadPost() {
    return new Promise(resolve => {
      this.USMService.getPost(this.post.id).subscribe(
                data => {
                    resolve(data);
                },
                err => {}
            );
      });
    }

    doRefresh(refresher) {
      this.loadPost().then( data => {
        this.post = data;
        refresher.complete();
      });
    }

}
