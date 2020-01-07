import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notif-modal',
  templateUrl: './notif-modal.page.html',
  styleUrls: ['./notif-modal.page.scss'],
})
export class NotifModalPage implements OnInit {
  baseUrl = environment.baseUrl;
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  async dismiss() {
		await this.modal.dismiss();
	}

}
