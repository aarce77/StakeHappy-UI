import { Component, OnInit } from '@angular/core';
import { Client } from "app/models/client";
import { ClientService } from "app/client/client.service";

@Component({
	selector: 'stak-client-list',
	templateUrl: './client-list.component.html',
	styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
	clientService: ClientService;
	clients: Client[];
	errorMessage: string;

	constructor(clientService: ClientService) {
		this.clientService = clientService;
	 }

	ngOnInit() {
		this.clientService.getClients().subscribe(
			clients => this.clients = clients,
			error => this.errorMessage = error
		);
	}

}
