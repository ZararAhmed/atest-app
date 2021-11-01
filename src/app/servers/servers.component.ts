import { Component } from "@angular/core";

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html'
})
export class Servers {
	allowNewServer = false;
	serverCreationStatus = '';
	serverName = '';
	serverNames: string[] = []
	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 3000)
	}

	onServerCreated = () => {
		if (this.serverName) {
			this.serverNames.push(this.serverName);
			this.serverCreationStatus = `Server ${this.serverName} was created`;
		}
	}
	updateServer = (event: any) => {
		this.serverName = event.target.value;
	}
}