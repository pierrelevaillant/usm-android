import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleGalleryPage } from './single-gallery';

import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  declarations: [
    SingleGalleryPage,
    GalleryModal,
    ZoomableImage,
  ],
  imports: [
  	LazyLoadImageModule,
    IonicPageModule.forChild(SingleGalleryPage),
  ],
  entryComponents: [
    GalleryModal
  ],
  exports: [
    SingleGalleryPage
  ]
})
export class SingleGalleryPageModule {}
