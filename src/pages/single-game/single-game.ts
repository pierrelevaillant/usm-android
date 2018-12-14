import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { USMService } from '../../services/USMService';
import { Fabric } from '../../services/Fabric';

@IonicPage()
@Component({
  selector: 'page-single-game',
  templateUrl: 'single-game.html',
})
export class SingleGamePage {
  game: any;
  gameEvents: any;
  gameLineUps: any;

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private USMService: USMService,
    private Fabric: Fabric
    ) {}

  ionViewDidLoad() {
    this.game = this.navParams.get('game');
    this.loadMatchEvents(this.game.id);
    this.loadMatchLineUps(this.game.id);
  }

  loadMatchEvents(id) {
    return new Promise(resolve => {
      this.USMService.getMatchEvents(id).subscribe(
        data => {
          this.gameEvents = data.data; 
        },
        err => {}
        );
    });
  }

  loadMatchLineUps(id) {
    return new Promise(resolve => {
      this.USMService.getMatchLineUps(id).subscribe(
        data => {
          this.gameLineUps = data.data;
        },
        err => {}
        );
    });
  }

}
