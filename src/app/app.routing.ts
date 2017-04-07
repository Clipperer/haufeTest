/**
 * Created by Clipperer on 05-Apr-17.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}