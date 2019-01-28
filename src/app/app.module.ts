import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MomentModule } from 'angular2-moment';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

import { USMService } from '../services/USMService';
import { Fabric } from '../services/Fabric';

import { HomePageModule } from '../pages/home/home.module';
import { TeamsPageModule } from '../pages/teams/teams.module';
import { SearchPageModule } from '../pages/search/search.module';
import { SinglePostPageModule } from '../pages/single-post/single-post.module';
import { SingleGamePageModule } from '../pages/single-game/single-game.module';
import { LivePageModule } from '../pages/live/live.module';
import { MediasPageModule } from '../pages/medias/medias.module';
import { RanksPageModule } from '../pages/ranks/ranks.module';
import { SingleGalleryPageModule } from '../pages/single-gallery/single-gallery.module';
import { PopSeasonsPageModule } from '../pages/pop-seasons/pop-seasons.module';
import { TabsPage } from '../pages/tabs/tabs';

// Cordova plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';


import {OneSignal} from '@ionic-native/onesignal';

@NgModule({
  declarations: [
  MyApp,
  TabsPage
  ],
  imports: [

  // Pages
  HomePageModule,
  TeamsPageModule,
  SearchPageModule,
  SinglePostPageModule,
  SingleGamePageModule,
  LivePageModule,
  RanksPageModule,
  MediasPageModule,
  SingleGalleryPageModule,
  PopSeasonsPageModule,

  BrowserModule,
  MomentModule,
  LazyLoadImageModule,
  HttpModule,
  IonicModule.forRoot(MyApp),
  IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  TabsPage
  ],
  providers: [
  USMService,
  Fabric,
  StatusBar,
  InAppBrowser,
  SplashScreen,
  SocialSharing,
  OneSignal,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
