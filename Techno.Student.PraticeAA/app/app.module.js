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
const common_1 = require("@angular/common");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const core_module_1 = require("./core/core.module");
const erp_core_module_1 = require("./erp-core/erp-core.module");
const shared_module_1 = require("./shared/shared.module");
const erp_shared_module_1 = require("./erp-shared/erp-shared.module");
const exercise_01_module_1 = require("./exercise-01/exercise-01.module");
const app_component_1 = require("./app.component");
const exercise_01_routing_module_1 = require("./exercise-01/exercise-01-routing.module");
const app_routing_module_1 = require("./app-routing.module");
let AppModule = class AppModule {
    constructor() { }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, router_1.RouterModule, exercise_01_routing_module_1.Exercise01RoutingModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule, core_module_1.CoreModule, erp_core_module_1.ErpCoreModule, shared_module_1.SharedModule, erp_shared_module_1.ErpSharedModule, exercise_01_module_1.Exercise01Module],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map