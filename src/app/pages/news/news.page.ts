import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.page.html',
	styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
	baseUrl = environment.baseUrl;
	news_notification:object;
	notifications:object;
	unread_notifications;
	constructor(private notification: NotificationService, private storage: Storage, private loading: LoadingController, private ss: SharedService) { }

	async ngOnInit() {
		const loader = await this.loading.create({
			message: 'Please wait...',
			translucent: true,
		});

		await loader.present();

		this.ss.changeName("News");

		// this.storage.get('notifications').then((notifs) => {
		// 	this.unread_notifications = notifs.unread_count;
		// 	this.notifications = notifs.notifications;
		// });

		this.notification.getAllNotifByType('news').then((notifs) => {
			this.news_notification = notifs;
			loader.dismiss();
		})
	}

}
