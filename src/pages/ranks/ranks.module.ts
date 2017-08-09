import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RanksPage } from './ranks';

@NgModule({
  declarations: [
    RanksPage,
  ],
  imports: [
    IonicPageModule.forChild(RanksPage),
  ],
  exports: [
    RanksPage
  ]
})
export class RanksPageModule {}
