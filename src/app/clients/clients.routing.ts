/**
 * Created by Clipperer on 05-Apr-17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {clientDetails}  from './clientDetails/clientDetails';
import {clientsOverview}  from './clientsOverview/clientsOverview';
import {ClientsMain} from './clientsMain/clientsMain'

const clientRoutes: Routes = [
        {
            path: 'clients', component: ClientsMain,
            children: [
                {
                    path: '',
                    component: clientsOverview,
                },
                {
                    path: ':id',
                    component: clientDetails,
                }
            ]
        },
    ]
;

@NgModule({
    imports: [
        RouterModule.forChild(clientRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ClientsRouting {}