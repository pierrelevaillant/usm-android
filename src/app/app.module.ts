import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MomentModule } from 'angular2-moment';

import { USMService } from '../services/USMService';

import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { SearchPage } from '../pages/search/search';
import { LivePage } from '../pages/live/live';
import { MediasPage } from '../pages/medias/medias';
import { SinglePostPage } from '../pages/single-post/single-post';
import { SingleGalleryPage } from '../pages/single-gallery/single-gallery';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {OneSignal} from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    LivePage,
    TeamsPage,
    SearchPage,
    HomePage,
    TabsPage,
    MediasPage,
    SinglePostPage,
    SingleGalleryPage
  ],
  imports: [
    BrowserModule,
    MomentModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LivePage,
    TeamsPage,
    SearchPage,
    HomePage,
    TabsPage,
    MediasPage,
    SinglePostPage,
    SingleGalleryPage
  ],
  providers: [
    USMService,
    StatusBar,
    InAppBrowser,
    SplashScreen,
    SocialSharing,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
