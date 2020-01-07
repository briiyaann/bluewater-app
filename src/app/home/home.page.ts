import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { NotificationService } from '../services/notification/notification.service';
import { Storage } from '@ionic/storage';
import { NotifModalPage } from '../pages/notif-modal/notif-modal.page';
import { SharedService } from '../services/shared/shared.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor(
		private route: Router, 
		private aroute: ActivatedRoute, 
		private menuCtrl: MenuController, 
		private notification: NotificationService, 
		private storage: Storage,
		private modal: ModalController,
		private ss: SharedService,
		private iab: InAppBrowser
		) {

		 }

	headerTitle;
	unread_notifications = 0;
	notifications = {};

	ngOnInit() {
		this.menuCtrl.enable(true);
		this.headerTitle = 'bluewater maribago';
		this.storage.remove('notifications');

		let notifications = this.notification.getAllNotification().then((data:any) => {
			this.unread_notifications = data.unread_count;
			this.storage.set('notifications', data);
		})

		this.ss.changeName("Home");
	}

	async showNotif()
	{
		let notification_list;
		await this.storage.get('notifications').then((notifs:any) => {
			console.log(notifs)
			notification_list = notifs.notifications;
		})

		const modal = await this.modal.create({
			component: NotifModalPage,
			componentProps: {
				notifications: notification_list
			}
		})

		await modal.present();
	}

	openBrowser() {
		this.iab.create('https://booking.bluewatermaribago.com.ph/4.23/', '_system');
	}
}
