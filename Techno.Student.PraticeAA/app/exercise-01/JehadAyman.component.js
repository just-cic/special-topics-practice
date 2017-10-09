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
const action_bar_service_1 = require("./../erp-core/action-bar/action-bar.service");
let JehadAymanComponent = class JehadAymanComponent {
    constructor(/*private webApi: WebApiProxyService, private modal: ModalService, private storage: StorageService, private lookup: LookupService, */ actionBar, router, route) {
        this.actionBar = actionBar;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.actionBar.setActions([action_bar_service_1.ActionBarService.PRINT_ACTION]).subscribe((action) => this.onActionBar(action));
    }
    onActionBar(action) {
        if (action == action_bar_service_1.ActionBarService.PRINT_ACTION.code) {
        }
    }
};
JehadAymanComponent = __decorate([
    core_1.Component({
        templateUrl: './app/exercise-01/JehadAyman.component.html'
    }),
    __metadata("design:paramtypes", [action_bar_service_1.ActionBarService, router_1.Router, router_1.ActivatedRoute])
], JehadAymanComponent);
exports.JehadAymanComponent = JehadAymanComponent;
//# sourceMappingURL=JehadAyman.component.js.map