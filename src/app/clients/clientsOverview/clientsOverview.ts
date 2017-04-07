/**
 * Created by Clipperer on 04-Apr-17.
 */
import {Component} from '@angular/core';

import {ClientService} from '../clients.service'
import {Client} from '../clients.clientModel'

import {Subscription}   from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'clientsOverview.html',
    styleUrls: ['clientsOverview.scss']
})
export class clientsOverview {
    clients: Client[];
    percentage: number;
    clientsSubscription: Subscription;

    constructor(private service: ClientService) {
    }

    ngOnInit() {
        this.service.getClients()
            .subscribe(
                clients => {
                    this.clients = clients;
                    this.getPercentage();
                },
            );
    }

    getPercentage() {
        let counter = 0;
        this.clients.map((client: Client) => {
            if (client['sex'] === 'male')
                counter++
        });
        this.percentage = Math.round((counter / this.clients.length) * 100);
    }
}
