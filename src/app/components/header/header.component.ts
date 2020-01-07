import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NotifModalPage } from 'src/app/pages/notif-modal/notif-modal.page';
import { ModalController } from '@ionic/angular';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	constructor(private storage: Storage, private modal: ModalController, private notification: NotificationService, private ss: SharedService) { }
	unread_notifications = 0;
	headerTitle;
	ngOnInit() {
		this.storage.remove('notifications');

		this.ss.currentCount.subscribe(message => {
			this.unread_notifications = message;
		})

		this.ss.currentName.subscribe(message => {
			this.headerTitle = message;
		})

		let notifications = this.notification.getAllNotification().then((data: any) => {
			this.unread_notifications = data.unread_count;
			this.storage.set('notifications', data);
		})
	}

	async showNotif() {
		let notification_list;
		await this.storage.get('notifications').then((notifs: any) => {
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

}
