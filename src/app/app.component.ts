import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { USMService } from '../services/USMService';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = TabsPage;

    constructor(
        private platform: Platform,
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

        	// Init Cordova plugins
        	if (this.platform.is('cordova')) {
        		this.oneSignalInit();
        	}
      	});
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
            if (option.post) {
                this.USMService.getPost(option.post).subscribe(
                    data => {
                        alert(data.title.rendered);
                    },
                    err => {}
                );
            }
		});
		this.oneSignal.endInit();
    }

}
