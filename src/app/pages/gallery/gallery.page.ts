import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private ss: SharedService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.ss.changeName("Gallery");
  }

  openBrowser() {
		this.iab.create('https://booking.bluewatermaribago.com.ph/4.23/', '_system');
	}
}
