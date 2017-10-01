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
const action_bar_service_1 = require("./action-bar.service");
let ActionBarComponent = class ActionBarComponent {
    constructor(service) {
        this.service = service;
        this.subscription = this.service.allowedActions.subscribe((actions) => {
            this.actions = actions;
            this.showActionBar = (actions && actions.length > 0);
        });
    }
    takeAction(action) {
        this.service.takeAction(action);
    }
    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }
};
ActionBarComponent = __decorate([
    core_1.Component({
        selector: 'action-bar',
        templateUrl: './app/erp-core/action-bar/action-bar.component.html',
    }),
    __metadata("design:paramtypes", [action_bar_service_1.ActionBarService])
], ActionBarComponent);
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=action-bar.component.js.map