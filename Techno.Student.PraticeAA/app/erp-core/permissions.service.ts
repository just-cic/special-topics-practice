import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//import { WebApiProxyService } from './../core/web-api-proxy.service'

@Injectable()
export class PermissionsService {

    private inited: boolean;
    //private active: any;
    private subject: BehaviorSubject<any[]>;
    private subjectActiveTransaction: BehaviorSubject<any>;

    constructor(/*private webapi: WebApiProxyService*/) {
        this.inited = false;
        this.subject = new BehaviorSubject<any[]>([]);
        this.subjectActiveTransaction = new BehaviorSubject<any>(null);
    }

    subscribe(fn) {
        this.subject.subscribe(fn);
    }

    reset() {
        this.subject.next([]);
    }

    refresh() {
        //this.webapi.get('erp/api/permissions/permissions').subscribe((systems: any[]) => { this.subject.next(systems); this.subjectActiveTransaction.next(this.subjectActiveTransaction.getValue()); });
    }

    setActiveTransaction(systemId: string, transactionId: string) {
        this.subjectActiveTransaction.next({ systemId: systemId, transactionId: transactionId });
    }

    activeTransaction(fn: any) {
        return this.subjectActiveTransaction.subscribe(fn);
    }

    getTransactionName(systemId: string, transactionId: string) {
        return 'إسم الشاشة غير معروف';
    }
}