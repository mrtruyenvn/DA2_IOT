import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	isOn = false;

	constructor() {

	}

	ngOnInit() {
		this.isOn = true;
	}

	onSwitch() {
		this.isOn = !this.isOn;
	}
}
