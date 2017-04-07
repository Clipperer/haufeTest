/**
 * Created by Clipperer on 04-Apr-17.
 */
import { NgModule } from '@angular/core';
import { MaterialModule  } from '@angular/material';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing'

import { AppComponent } from './app.component';
import {topBar} from './main/topBar/app.topBar'

//modules
import { MainModule } from './main/main.module';
import { ClientsModule } from './clients/clients.module'

//theming css
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

@NgModule({
    imports: [
        BrowserModule,
        ClientsModule,
        MainModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        topBar
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }