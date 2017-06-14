import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { IonMatchModule } from '../../components/ion-match/ion-match.module';
import { IonPostModule } from '../../components/ion-post/ion-post.module';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
  	IonMatchModule,
  	IonPostModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
