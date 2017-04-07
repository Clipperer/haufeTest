/**
 * Created by Clipperer on 04-Apr-17.
 */
import {Component} from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';
import {ClientDetails} from '../clients.clientDetailsModel'

import {Router, ActivatedRoute} from '@angular/router';
import {MdSnackBar} from '@angular/material';

import {ClientService} from '../clients.service'

@Component({
    selector: 'clientDetails',
    templateUrl: 'clientDetails.html',
    styleUrls: ['clientDetails.scss']
})

export class clientDetails {
    errorMessage: string;
    client: ClientDetails;
    providedId: Subscription;
    selectedId: number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ClientService,
                private errorBar: MdSnackBar) {
    }

    ngOnInit() {
        this.providedId = this.route.params.subscribe(params => {
            this.selectedId = params['id'];
            this.service.setSelectedClient(this.selectedId);
            this.getClient();
        })
    }

    getClient() {
        this.service.getClient(this.selectedId)
            .subscribe(
                client => {
                    this.client = client
                },
                error => {
                    this.errorMessage = <any>error;
                    this.errorBar.open('Error loading current client', '', {duration: 5000})
                    this.router.navigate(['/clients']);
                }
            )
    }

    goBack() {
        this.router.navigate(['/clients']);
    }

    ngOnDestroy() {
        this.service.setSelectedClient(null);
    }
}
