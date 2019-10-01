import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor(private route: Router, private aroute: ActivatedRoute, private menuCtrl: MenuController) { }

	headerTitle;
	
	ngOnInit() {
		this.menuCtrl.enable(true);
		this.headerTitle = 'bluewater maribago';
	}
}
