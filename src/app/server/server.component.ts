import { Component } from "@angular/core";

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})
export class Server {
	id: number = 987633
	title: string = 'Server';
	port: number = 2345;
	status: boolean = true;

	getServerStatus() {
		this.status = !this.status;
		return this.status;
	}
	getPortNumber() {
		this.port += 1;
		return this.port;
	}
}