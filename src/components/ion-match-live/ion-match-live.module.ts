import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonMatchLive } from './ion-match-live';

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    IonMatchLive,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(IonMatchLive),
  ],
  exports: [
    IonMatchLive
  ]
})
export class IonMatchLiveModule {}
