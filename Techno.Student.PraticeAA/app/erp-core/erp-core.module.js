"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router"); //Cannot bind to routerLink
const action_bar_service_1 = require("./action-bar/action-bar.service");
const erp_lookup_service_1 = require("./erp-lookup.service");
const permissions_service_1 = require("./permissions.service");
const navigation_bar_component_1 = require("./navigation-bar/navigation-bar.component");
const action_bar_component_1 = require("./action-bar/action-bar.component");
const welcome_component_1 = require("./welcome/welcome.component");
const not_implemented_component_1 = require("./not-implemented/not-implemented.component");
let ErpCoreModule = class ErpCoreModule {
};
ErpCoreModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule],
        declarations: [navigation_bar_component_1.NavigationBarComponent, action_bar_component_1.ActionBarComponent, welcome_component_1.WelcomeComponent, not_implemented_component_1.NotImplementedComponent],
        providers: [erp_lookup_service_1.ErpLookupService, action_bar_service_1.ActionBarService, permissions_service_1.PermissionsService],
        exports: [navigation_bar_component_1.NavigationBarComponent, action_bar_component_1.ActionBarComponent, welcome_component_1.WelcomeComponent, not_implemented_component_1.NotImplementedComponent]
    })
], ErpCoreModule);
exports.ErpCoreModule = ErpCoreModule;
//# sourceMappingURL=erp-core.module.js.map