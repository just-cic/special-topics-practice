"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const permissions_service_1 = require("./erp-core/permissions.service");
//import { AuthenticationService } from './core/authentication.service';
//import { SpinnerService } from './core/spinner.service';
//import { ModalService } from './core/modal.service';
const action_bar_service_1 = require("./erp-core/action-bar/action-bar.service");
let AppComponent = class AppComponent {
    constructor(actionBar, router, permissions, /*private route: ActivatedRoute, private spinner: SpinnerService, private modal: ModalService, */ vc) {
        this.actionBar = actionBar;
        this.router = router;
        this.permissions = permissions;
        this.vc = vc;
        this.subAuthentication = null;
        this.showSpinner = false;
        this.router.events.subscribe((event) => {
            if (event instanceof router_1.NavigationStart) {
                //this.showLoginPage = (event.url.indexOf('/login') == 0);
                //
                //The user might navigate to the same transaction
                //
                if (event.url != this.currentUrl) {
                    actionBar.reset();
                    if (event.url.indexOf('/login') != 0)
                        this.currentUrl = event.url;
                    //
                    //This block is for setting the current transaction
                    //
                    if (event.url.indexOf('/', 1) != -1) {
                        let parts = event.url.substr(0, (event.url.indexOf('?') != -1 ? event.url.indexOf('?') : event.url.length)).split('/');
                        while (parts.length > 0 && !parts[0])
                            parts.splice(0, 1);
                        if (parts[0] == 'reporting')
                            parts.splice(0, 1);
                        let systemId = parts[0];
                        let transactionId = parts[1];
                        this.permissions.setActiveTransaction(systemId, transactionId);
                    }
                    //
                    //
                    //
                }
            }
            else if (event instanceof router_1.RoutesRecognized) {
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
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'techno-erp',
        templateUrl: './app/app.component.html'
    }),
    __metadata("design:paramtypes", [action_bar_service_1.ActionBarService, router_1.Router, permissions_service_1.PermissionsService, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map