import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
	selector: 'app-notif-page',
	templateUrl: './notif-page.page.html',
	styleUrls: ['./notif-page.page.scss'],
})
export class NotifPagePage implements OnInit {
	baseUrl = environment.baseUrl;
	notification_details;
	title;
	constructor(private notification: NotificationService, private route: ActivatedRoute, private loading: LoadingController, private storage: Storage, private ss: SharedService) { }

	notif_id = this.route.snapshot.paramMap.get('id');

	async ngOnInit() {
		const loader = await this.loading.create({
			message: 'Please wait...',
			translucent: true,
		});

		await loader.present();

		this.notification.getNotification(this.notif_id).then((notif: any) => {
			this.notification_details = notif;
			this.title = notif.title;
			loader.dismiss();
		})

		this.notification.readNotification(this.notif_id).then((data:any) => {
				this.storage.set('notifications', data.data).then(() => {

				})

				this.ss.changeCount(data.data.unread_count);
			})
	}

}
