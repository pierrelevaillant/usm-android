import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-single-post',
  templateUrl: 'single-post.html',
})
export class SinglePostPage {
  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
	this.post = this.navParams.get('post');
  }

}
