import { Component } from '@angular/core';
import { Platform, ModalController, App, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { USMService } from '../services/USMService';

import { TabsPage } from '../pages/tabs/tabs';
import { SinglePostPage } from '../pages/single-post/single-post';

import moment from 'moment';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = TabsPage;

    constructor(
        private platform: Platform,
        private app: App,
        private modalCtrl: ModalController,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private oneSignal: OneSignal,
        private USMService: USMService
    ) {
      	platform.ready().then(() => {
        	// Okay, so the platform is ready and our plugins are available.
        	// Here you can do any higher level native things you might need.
        	statusBar.styleDefault();
        	splashScreen.hide();

            moment.locale('fr');

        	// Init Cordova plugins
        	if (this.platform.is('cordova')) {
        		this.oneSignalInit();
        	}
      	});
    }

    get navCtrl(): NavController {
        return this.app.getRootNav();
    }

    private oneSignalInit() {
    	this.oneSignal.startInit('264b01aa-4f59-4cdc-bcd4-0e5293925e2d', '379011050678');
		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
		this.oneSignal.handleNotificationReceived().subscribe(() => {
			// do something when notification is received
		});

		this.oneSignal.handleNotificationOpened().subscribe( data => {
		  	// do something when a notification is opened
            let option = data.notification.payload.additionalData.data;
            
            // Retrieve notification data
            // - POST (Post / Gallery)
            // - TAB
            if (option.post) {
                this.USMService.getPost(option.post).subscribe(
                    data => {
                        this.navCtrl.push(SinglePostPage, {
                            post: data
                        });
                    },
                    err => {}
                );
            } else if (option.tab) {
                this.navCtrl.setRoot(TabsPage,{tab: option.tab});
            }
		});
		this.oneSignal.endInit();
    }

}
