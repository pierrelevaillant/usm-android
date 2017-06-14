import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonMatch } from './ion-match';

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    IonMatch,
  ],
  imports: [
  	MomentModule,
    IonicPageModule.forChild(IonMatch),
  ],
  exports: [
    IonMatch
  ]
})
export class IonMatchModule {}
