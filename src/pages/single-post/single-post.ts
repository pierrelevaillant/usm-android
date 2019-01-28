import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { USMService } from '../../services/USMService';
import { Fabric } from '../../services/Fabric';

import { SingleGamePage } from '../single-game/single-game';

@IonicPage()
@Component({
  selector: 'page-single-post',
  templateUrl: 'single-post.html',
})
export class SinglePostPage {
  post: any;
  relatedPosts: any = [];

  constructor(
    private navCtl: NavController,
    private navParams: NavParams,
    private socialSharing: SocialSharing,
    private USMService: USMService,
    private Fabric: Fabric
    ) {}

  ionViewDidLoad() {
    this.post = this.navParams.get('post');
    this.loadRelatedPosts();

    // Send Fabric event
    this.Fabric.sendCustomEvent('Article', {article: this.post.title.rendered});
  }

  regularShare(){
    let image = this.post.featured_media ? this.post.featured_media.sizes.large.source_url : null;
    this.socialSharing.share(this.post.title.rendered, null, image, this.post.link); 
  }

  loadRelatedPosts() {
    this.USMService.getPostRelatedPosts(this.post.id).subscribe(
      data => {
        this.relatedPosts = data.data;
      },
      err => {}
      );
  }

  gameTapped(event, game) {
    this.navCtl.push(SingleGamePage, {
      game: game
    });
  }

  itemTapped(event, post) {
    this.navCtl.push(SinglePostPage, {
      post: post
    });
  }

}
