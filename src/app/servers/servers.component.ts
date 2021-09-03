import { Component } from "@angular/core";

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html'
})
export class Servers {
	allowNewServer = false;
	serverCreationStatus = "No Server";
	newServer = '';
	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 3000)
	}

	onServerCreated = () => {
		this.serverCreationStatus = `Server ${this.newServer} was created`;
	}
	updateServer = (event: any) => {
		this.newServer = event.target.value;
	}
}