import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonMatch } from './ion-match';

@NgModule({
  declarations: [
    IonMatch,
  ],
  imports: [
    IonicPageModule.forChild(IonMatch),
  ],
  exports: [
    IonMatch
  ]
})
export class IonMatchModule {}
