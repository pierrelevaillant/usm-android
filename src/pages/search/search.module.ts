import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';

import { IonPostSmallModule } from '../../components/ion-post-small/ion-post-small.module';


@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
  	IonPostSmallModule,
    IonicPageModule.forChild(SearchPage),
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule {}
