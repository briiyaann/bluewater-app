import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      title: 'List',
      url: '/list',
      icon: ['fas', 'list']
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
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
