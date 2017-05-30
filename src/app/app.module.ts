import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MomentModule } from 'angular2-moment';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

import { USMService } from '../services/USMService';
import { Fabric } from '../services/Fabric';

import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { SearchPage } from '../pages/search/search';
import { LivePage } from '../pages/live/live';
import { MediasPage } from '../pages/medias/medias';
import { SinglePostPage } from '../pages/single-post/single-post';
import { SingleGalleryPage } from '../pages/single-gallery/single-gallery';
import { PopSeasonsPage } from '../pages/pop-seasons/pop-seasons';
import { TabsPage } from '../pages/tabs/tabs';
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

// Cordova plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';


import {OneSignal} from '@ionic-native/onesignal';
import { IonMatch } from '../components/ion-match/ion-match';

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
    SingleGalleryPage,
    PopSeasonsPage,
    IonMatch,
    GalleryModal,
    ZoomableImage,
  ],
  imports: [
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
    LivePage,
    TeamsPage,
    SearchPage,
    HomePage,
    TabsPage,
    MediasPage,
    SinglePostPage,
    PopSeasonsPage,
    SingleGalleryPage,
    GalleryModal
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
