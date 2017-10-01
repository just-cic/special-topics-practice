import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErpCoreModule } from './../erp-core/erp-core.module';
import { TransactionComponent } from './transaction.component';

@NgModule({
    imports: [CommonModule, RouterModule, ErpCoreModule],
    declarations: [TransactionComponent],
    providers: [],
    exports: []
})
export class ErpSharedModule { }
