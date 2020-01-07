import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.page.html',
  styleUrls: ['./dining.page.scss'],
})
export class DiningPage implements OnInit {

  constructor(private ss: SharedService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.ss.changeName("Dining");
  }

  openBrowser() {
		this.iab.create('https://booking.bluewatermaribago.com.ph/4.23/', '_system');
	}

}
