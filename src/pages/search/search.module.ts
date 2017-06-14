import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';

import { IonPostModule } from '../../components/ion-post/ion-post.module';


@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
  	IonPostModule,
    IonicPageModule.forChild(SearchPage),
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule {}
