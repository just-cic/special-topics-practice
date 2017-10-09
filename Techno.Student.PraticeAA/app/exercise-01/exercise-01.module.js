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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const shared_module_1 = require("./../shared/shared.module");
const jawad_damir_component_1 = require("./jawad-damir.component");
const JehadAyman_component_1 = require("./JehadAyman.component");
let Exercise01Module = class Exercise01Module {
};
Exercise01Module = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, shared_module_1.SharedModule],
        declarations: [jawad_damir_component_1.JawadDamirComponent, JehadAyman_component_1.JehadAymanComponent]
    })
], Exercise01Module);
exports.Exercise01Module = Exercise01Module;
//# sourceMappingURL=exercise-01.module.js.map