import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private ss: SharedService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.ss.changeName("Events");
  }

  openBrowser() {
		this.iab.create('https://booking.bluewatermaribago.com.ph/4.23/', '_system');
	}
}
