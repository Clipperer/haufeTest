/**
 * Created by Clipperer on 05-Apr-17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MaterialModule } from '@angular/material';

import { MainRouting } from './main.routing'

import { home }  from './home/main.home';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        MainRouting
    ],
    declarations: [
        home,
    ],
})
export class MainModule {}