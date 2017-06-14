import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsPage } from './teams';

import { IonMatchModule } from '../../components/ion-match/ion-match.module';


@NgModule({
  declarations: [
    TeamsPage,
  ],
  imports: [
  	IonMatchModule,
    IonicPageModule.forChild(TeamsPage),
  ],
  exports: [
    TeamsPage
  ]
})
export class TeamsPageModule {}
