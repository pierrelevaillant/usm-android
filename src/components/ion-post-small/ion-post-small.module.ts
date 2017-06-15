import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonPostSmall } from './ion-post-small';

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    IonPostSmall,
  ],
  imports: [
  	MomentModule,
    IonicPageModule.forChild(IonPostSmall),
  ],
  exports: [
    IonPostSmall
  ]
})
export class IonPostSmallModule {}
