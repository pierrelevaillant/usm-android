import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonPostSmall } from './ion-post-small';

import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
  IonPostSmall,
  ],
  imports: [
  LazyLoadImageModule,
  MomentModule,
  IonicPageModule.forChild(IonPostSmall),
  ],
  exports: [
  IonPostSmall
  ]
})
export class IonPostSmallModule {}
