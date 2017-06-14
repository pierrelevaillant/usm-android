import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediasPage } from './medias';

import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    MediasPage,
  ],
  imports: [
  	LazyLoadImageModule,
  	MomentModule,
    IonicPageModule.forChild(MediasPage),
  ],
  exports: [
    MediasPage
  ]
})
export class MediasPageModule {}
