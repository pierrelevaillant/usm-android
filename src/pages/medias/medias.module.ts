import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediasPage } from './medias';

@NgModule({
  declarations: [
    MediasPage,
  ],
  imports: [
    IonicPageModule.forChild(MediasPage),
  ],
  exports: [
    MediasPage
  ]
})
export class MediasPageModule {}
