"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
//import { EmptyComponent } from './shared/empty.component';
//import { EmptyRouterOutletComponent } from './shared/empty-router-outlet.component';
const welcome_component_1 = require("./erp-core/welcome/welcome.component");
const not_implemented_component_1 = require("./erp-core/not-implemented/not-implemented.component");
const routes = [
    //{ path: 'login', component: EmptyComponent },
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: '**', component: not_implemented_component_1.NotImplementedComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routedComponents = [];
//# sourceMappingURL=app-routing.module.js.map