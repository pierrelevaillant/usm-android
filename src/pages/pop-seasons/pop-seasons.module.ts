import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopSeasonsPage } from './pop-seasons';

@NgModule({
  declarations: [
    PopSeasonsPage,
  ],
  imports: [
    IonicPageModule.forChild(PopSeasonsPage),
  ],
  exports: [
    PopSeasonsPage
  ]
})
export class PopSeasonsPageModule {}
