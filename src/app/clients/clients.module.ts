/**
 * Created by Clipperer on 05-Apr-17.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';

import {ClientsRouting} from './clients.routing'
import {MaterialModule} from '@angular/material';

import {ClientsList}  from './clientsList/clientsList';
import {clientDetails}  from './clientDetails/clientDetails';
import {clientsOverview}  from './clientsOverview/clientsOverview';
import {ClientsMain} from './clientsMain/clientsMain'

import {ClientService} from './clients.service'

@NgModule({
    imports: [
        CommonModule,
        ClientsRouting,
        MaterialModule
    ],
    declarations: [
        ClientsList,
        clientDetails,
        clientsOverview,
        ClientsMain
    ],
    providers: [ClientService]
})

export class ClientsModule {
}