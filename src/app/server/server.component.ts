import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
	.online {
		color: white;
	}
	`]
})
export class Server {
	id: number = 987633;
	title: string = 'Server';
	port: number = 2345;
	serverStatus: string = 'offline';
	constructor(){
		this.serverStatus = Math.random () > 0.5 ? 'offline' : 'online'
	}

	getColor(){
		return this.serverStatus === 'online' ? 'green' :'red';
	}
}