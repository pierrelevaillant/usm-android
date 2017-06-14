import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonPost } from './ion-post';

import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    IonPost,
  ],
  imports: [
  	LazyLoadImageModule,
  	MomentModule,
    IonicPageModule.forChild(IonPost),
  ],
  exports: [
    IonPost
  ]
})
export class IonPostModule {}
