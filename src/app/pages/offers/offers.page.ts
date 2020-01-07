import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

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
    
    this.ss.changeName("Offers");

		await loader.present();

		// this.storage.get('notifications').then((notifs:any) => {
		// 	this.unread_notifications = notifs.unread_count;
		// 	this.notifications = notifs.notifications;
		// });

		this.notification.getAllNotifByType('offers').then((notifs) => {
			this.news_notification = notifs;
			loader.dismiss();
		})
	}

}
