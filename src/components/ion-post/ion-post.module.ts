import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonPost } from './ion-post';

@NgModule({
  declarations: [
    IonPost,
  ],
  imports: [
    IonicPageModule.forChild(IonPost),
  ],
  exports: [
    IonPost
  ]
})
export class IonPostModule {}
