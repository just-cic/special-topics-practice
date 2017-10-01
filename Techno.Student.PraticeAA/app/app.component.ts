import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { PermissionsService } from './erp-core/permissions.service'

//import { AuthenticationService } from './core/authentication.service';
//import { SpinnerService } from './core/spinner.service';
//import { ModalService } from './core/modal.service';

import { ActionBarService } from './erp-core/action-bar/action-bar.service';

@Component({
    selector: 'techno-erp',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
    
    private subAuthentication: Subscription = null;
    
    private showSpinner: boolean = false;
    private currentUrl: string;

    constructor(private actionBar: ActionBarService, private router: Router, private permissions: PermissionsService, /*private route: ActivatedRoute, private spinner: SpinnerService, private modal: ModalService, */private vc: ViewContainerRef) {

        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {

                //this.showLoginPage = (event.url.indexOf('/login') == 0);

                //
                //The user might navigate to the same transaction
                //
                if (event.url != this.currentUrl) {

                    actionBar.reset();

                    if (event.url.indexOf('/login') != 0) this.currentUrl = event.url;

                    //
                    //This block is for setting the current transaction
                    //
                    if (event.url.indexOf('/', 1) != -1) {

                        let parts: string[] = event.url.substr(0, (event.url.indexOf('?') != -1 ? event.url.indexOf('?') : event.url.length)).split('/');

                        while (parts.length > 0 && !parts[0]) parts.splice(0, 1);

                        if (parts[0] == 'reporting') parts.splice(0, 1);

                        let systemId: string = parts[0];
                        let transactionId: string = parts[1];

                        this.permissions.setActiveTransaction(systemId, transactionId);
                    }
                    //
                    //
                    //
                }
            }
            else if (event instanceof RoutesRecognized) {
                //if (this.subAuthentication == null) {
                //    this.subAuthentication = this.authService.subscribe(status => {
                //        this.authStatusChanged(status);
                //    });
                //}

                ////Prevent user from clicking BACK in the browser when the login page is shown
                //if (!this.authService.isAuthenticated() && event.url.indexOf('/login') != 0) {
                //    this.router.navigate(['/login']);
                //}
            }
        });

        //this.spinner.subscribe(v => { this.showSpinner = v; });
        //this.modal.setContainer(vc);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
