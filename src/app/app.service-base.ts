
import { Observable } from "rxjs/Observable";

export abstract class ServiceBase {
    public handleError(error: Response) {
		console.error(error);
		let msg = `Error status code ${error.status} at ${error.url}`;
		//return Observable.throw(error.json().error || 'Server error');
		return Observable.throw(msg || 'Server error');
	}
}