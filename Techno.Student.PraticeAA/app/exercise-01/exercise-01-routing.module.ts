import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionComponent } from './../erp-shared/transaction.component';

import { JawadDamirComponent } from './jawad-damir.component';
import { JehadAymanComponent } from './JehadAyman.component';

const exercise01Routes: Routes = [
    {
        path: 'exercise-01',
        component: TransactionComponent,
        children: [
            { path: 'jawad-damir', component: JawadDamirComponent },
            { path: 'JehadAyman', component: JehadAymanComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(exercise01Routes)
    ],
    exports: [
        RouterModule
    ]
})
export class Exercise01RoutingModule { }