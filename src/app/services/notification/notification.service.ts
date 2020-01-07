import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	baseUrl = environment.baseUrl;
	constructor(private http: HttpClient) { }

	async getAllNotification()
	{
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Access-Control-Allow-Headers': 'Content-Type'
			})
		};

		let notif = await this.http.get(`${this.baseUrl}public/api/v1/notifications/all`, httpOptions).toPromise();

		return notif;
	}

	async getAllNotifByType(type)
	{
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Access-Control-Allow-Headers': 'Content-Type'
			})
		};

		let notif = await this.http.get(`${this.baseUrl}public/api/v1/notifications/all/` + type, httpOptions).toPromise();

		return notif;
	}

	async getNotification(id)
	{
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Access-Control-Allow-Headers': 'Content-Type'
			})
		};

		let notif = await this.http.get(`${this.baseUrl}public/api/v1/notifications/` + id, httpOptions).toPromise();

		return notif;
	}

	async readNotification(id)
	{
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Access-Control-Allow-Headers': 'Content-Type'
			})
		};

		let notif = await this.http.post(`${this.baseUrl}public/api/v1/notifications/` + id + `/read`, [],  httpOptions).toPromise();

		return notif;
	}
}
