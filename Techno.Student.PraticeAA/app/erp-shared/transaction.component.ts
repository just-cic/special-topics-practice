import { Component } from '@angular/core';

import { PermissionsService } from './../erp-core/permissions.service'

@Component({
    template: '<div><action-bar></action-bar></div><div class="panel panel-default"><div class="panel-heading"><strong>{{title}}</strong></div><div class="panel-body" style="min-height: 500px; padding-top: 25px;"><router-outlet></router-outlet></div></div>'
})
export class TransactionComponent {
    private title: string;

    constructor(private permissions: PermissionsService) {
        permissions.activeTransaction((txn: any) => { this.title = this.permissions.getTransactionName(txn.systemId, txn.transactionId); });
    }
}
