import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
	private countSource = new BehaviorSubject<number>(0);
	currentCount = this.countSource.asObservable();

	private nameSource = new BehaviorSubject<string>("Home");
	currentName = this.nameSource.asObservable();
	constructor() { }

	changeCount(count: number) {
		this.countSource.next(count)
	}

	changeName(name: string) {
		this.nameSource.next(name);
	}
}
