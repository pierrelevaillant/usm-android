import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleGalleryPage } from './single-gallery';

@NgModule({
  declarations: [
    SingleGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleGalleryPage),
  ],
  exports: [
    SingleGalleryPage
  ]
})
export class SingleGalleryPageModule {}
