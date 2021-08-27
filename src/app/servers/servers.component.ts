import { Component } from "@angular/core";

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html'
})
export class Servers {
	allowNewServer = false;
	serverCreationStatus = "Not Created";
	newServer = 'Test';
	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 3000)
	}

	onServerCreated = () => {
		this.serverCreationStatus = "Server was created";
	}
	updateServer = (event: any) => {
		this.newServer = event.target.value;
	}
}