/**
 * Created by Clipperer on 04-Apr-17.
 */
import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Subscription}   from 'rxjs/Subscription';

import {MdSnackBar} from '@angular/material';

import {Client} from '../clients.clientModel'
import {ClientService} from '../clients.service'


@Component({
    selector: 'clientsList',
    templateUrl: 'clientsList.html',
    styleUrls: ['clientsList.scss']
})

export class ClientsList {
    errorMessage: string;
    clients: Client[];
    clientIdSubscription: Subscription;
    selectedId: Number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ClientService,
                private errorBar: MdSnackBar) {
    }

    ngOnInit(){

        this.service.getClients()
            .subscribe(
                clients => {
                    this.clients = clients;
                },
                error => {
                    this.errorMessage = <any>error;
                    this.errorBar.open('Error loading clients, please try again later', '', {duration: 5000})
                }
            );

        this.getActiveId();
    }

    getActiveId(){
        this.clientIdSubscription = this.service.selectedClientId.subscribe(id => this.selectedId = id)
    }

    selectClient(id: number | string) {
        this.router.navigate([+id], {relativeTo: this.route});
    }
}