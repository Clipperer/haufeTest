/**
 * Created by Clipperer on 05-Apr-17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Client} from './clients.clientModel'
import {ClientDetails} from './clients.clientDetailsModel'

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()

export class ClientService {
    private clientsURL = '/clients';
    private clientURL = '/client/';

    constructor(private http: Http) {
    }

    public loadedClients = new Subject<Client[]>();
    public needClients = new Subject<boolean>();
    private selectedId = new Subject<Number>();

    selectedClientId = this.selectedId.asObservable();

    setSelectedClient(id: number | string) {
        this.selectedId.next(+id);
    }

    getClients(): Observable<Client[]> {
        return this.http.get(this.clientsURL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getClient(id: number | string): Observable<ClientDetails> {
        return this.http.get(this.clientURL + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}