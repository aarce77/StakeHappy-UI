import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Client } from 'app/models/client';
import { Observable } from "rxjs/Observable";
import { ServiceBase } from "app/app.service-base";

@Injectable()
export class ClientService extends ServiceBase {

	constructor(private http: Http) {
		super();
	}

	getClients() {
		return this.http.get('api/clients.json')
			.map((resp: Response) => <Client[]>resp.json())
			.catch(this.handleError);
	}

	
}
