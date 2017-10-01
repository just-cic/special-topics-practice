import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { ActionBarService } from './../erp-core/action-bar/action-bar.service';

@Component({
    templateUrl: './app/exercise-01/jawad-damir.component.html'
})
export class JawadDamirComponent implements OnInit {

    constructor(/*private webApi: WebApiProxyService, private modal: ModalService, private storage: StorageService, private lookup: LookupService, */private actionBar: ActionBarService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.actionBar.setActions([ActionBarService.PRINT_ACTION]).subscribe((action: number) => this.onActionBar(action));
    }

    onActionBar(action: number) {
        if (action == ActionBarService.PRINT_ACTION.code) {
        }
    }
}
