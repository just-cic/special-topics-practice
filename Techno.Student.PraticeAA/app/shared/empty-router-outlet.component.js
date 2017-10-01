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
let EmptyRouterOutletComponent = class EmptyRouterOutletComponent {
    constructor(route) {
        this.route = route;
        this.title = 'عنوان الصفحة';
    }
};
EmptyRouterOutletComponent = __decorate([
    core_1.Component({
        template: '<div class="panel panel-default"><div class="panel-heading"><h4>{{title}}</h4></div><div class="panel-body" style="min-height: 500px; padding-top: 50px;"><router-outlet></router-outlet></div></div>'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], EmptyRouterOutletComponent);
exports.EmptyRouterOutletComponent = EmptyRouterOutletComponent;
//# sourceMappingURL=empty-router-outlet.component.js.map