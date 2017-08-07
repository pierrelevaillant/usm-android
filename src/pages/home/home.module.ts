import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { IonMatchModule } from '../../components/ion-match/ion-match.module';
import { IonMatchLiveModule } from '../../components/ion-match-live/ion-match-live.module';
import { IonPostModule } from '../../components/ion-post/ion-post.module';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
  	IonMatchModule,
  	IonPostModule,
    IonMatchLiveModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
