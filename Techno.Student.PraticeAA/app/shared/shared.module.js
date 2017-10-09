"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const empty_component_1 = require("./empty.component");
const empty_router_outlet_component_1 = require("./empty-router-outlet.component");
const techno_datepicker_component_1 = require("./techno-datepicker.component");
const techno_widget_component_1 = require("./techno-widget.component");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [empty_component_1.EmptyComponent, empty_router_outlet_component_1.EmptyRouterOutletComponent, techno_datepicker_component_1.TechnoDatePickerComponent, techno_widget_component_1.TechnoWidgetComponent],
        providers: [],
        exports: [empty_component_1.EmptyComponent, empty_router_outlet_component_1.EmptyRouterOutletComponent, techno_datepicker_component_1.TechnoDatePickerComponent, techno_widget_component_1.TechnoWidgetComponent]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map