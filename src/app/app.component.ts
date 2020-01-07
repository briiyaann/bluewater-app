import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: ['fas', 'home']
        },
        {
            title: 'News',
            url: '/news',
            icon: ['fas', 'newspaper']
        },
        {
            title: 'Offers',
            url: '/offers',
            icon: ['fas', 'hand-holding-usd']
        },
        {
            title: 'Accommodations',
            url: '/accommodations',
            icon: ['fas', 'bed']
        },
        {
            title: 'Dining',
            url: '/dining',
            icon: ['fas', 'utensils']
        },
        {
            title: 'Spa',
            url: '/spa',
            icon: ['fas', 'spa']
        },
        {
            title: 'Adventure',
            url: '/adventure',
            icon: ['fas', 'swimmer']
        },
        {
            title: 'Events',
            url: '/events',
            icon: ['fas', 'calendar-alt']
        },
        {
            title: 'Gallery',
            url: '/gallery',
            icon: ['fas', 'images']
        },
        {
            title: 'Logout',
            url: '/',
            icon: ['fas', 'sign-out-alt']
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private fcm: FCM,
        private router: Router,
        private alertCtrl: AlertController,
        private localNotifications: LocalNotifications
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.fcm.subscribeToTopic('people');

            this.fcm.getToken().then(token => {
              console.log(token);
            });

            this.fcm.onNotification().subscribe(data => {
              if (data.wasTapped) {
                this.router.navigateByUrl("/notif-page/" + data.id);
              } else {
                this.localNotifications.schedule({
                    id: 1
                })
                // this.router.navigate([data.landing_page]);
              }
            });
      
            this.fcm.onTokenRefresh().subscribe(token => {
              console.log(token);
            });

            this.localNotifications.on('click').subscribe(res => {

            })
      
            // this.fcm.unsubscribeFromTopic('marketing');
        });
    }
}
