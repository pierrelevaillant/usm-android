import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglePostPage } from './single-post';

import { IonMatchModule } from '../../components/ion-match/ion-match.module';
import { IonPostSmallModule } from '../../components/ion-post-small/ion-post-small.module';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    SinglePostPage,
  ],
  imports: [
  	IonMatchModule,
    IonPostSmallModule,
  	LazyLoadImageModule,
  	MomentModule,
    IonicPageModule.forChild(SinglePostPage),
  ],
  exports: [
    SinglePostPage
  ]
})
export class SinglePostPageModule {}
