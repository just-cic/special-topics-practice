import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { JawadDamirComponent } from './jawad-damir.component';
import { JehadAymanComponent } from './JehadAyman.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedModule],
    declarations: [JawadDamirComponent,JehadAymanComponent]
})
export class Exercise01Module { }
