import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglePostPage } from './single-post';

import { IonMatchModule } from '../../components/ion-match/ion-match.module';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    SinglePostPage,
  ],
  imports: [
  	IonMatchModule,
  	LazyLoadImageModule,
  	MomentModule,
    IonicPageModule.forChild(SinglePostPage),
  ],
  exports: [
    SinglePostPage
  ]
})
export class SinglePostPageModule {}
