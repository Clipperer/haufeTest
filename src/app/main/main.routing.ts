/**
 * Created by Clipperer on 05-Apr-17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { home } from './home/main.home'

const mainRoutes: Routes = [
    { path: 'home',  component: home },
];
@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRouting { }