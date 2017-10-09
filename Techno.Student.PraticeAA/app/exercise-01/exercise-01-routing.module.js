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
const transaction_component_1 = require("./../erp-shared/transaction.component");
const jawad_damir_component_1 = require("./jawad-damir.component");
const JehadAyman_component_1 = require("./JehadAyman.component");
const exercise01Routes = [
    {
        path: 'exercise-01',
        component: transaction_component_1.TransactionComponent,
        children: [
            { path: 'jawad-damir', component: jawad_damir_component_1.JawadDamirComponent },
            { path: 'JehadAyman', component: JehadAyman_component_1.JehadAymanComponent }
        ]
    }
];
let Exercise01RoutingModule = class Exercise01RoutingModule {
};
Exercise01RoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(exercise01Routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], Exercise01RoutingModule);
exports.Exercise01RoutingModule = Exercise01RoutingModule;
//# sourceMappingURL=exercise-01-routing.module.js.map