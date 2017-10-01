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
let TechnoDatePickerComponent = class TechnoDatePickerComponent {
    constructor() {
        this.dateChange = new core_1.EventEmitter();
        this.viewMode = 'day';
        this.minYear = 1990;
        this.maxYear = 2017;
        this.label = '';
    }
    ngOnInit() {
        this.months = [];
        this.months[0] = { code: '1', name: 'كانون ثاني' };
        this.months[1] = { code: '2', name: 'شباط' };
        this.months[2] = { code: '3', name: 'آذار' };
        this.months[3] = { code: '4', name: 'نيسان' };
        this.months[4] = { code: '5', name: 'أيار' };
        this.months[5] = { code: '6', name: 'حزيران' };
        this.months[6] = { code: '7', name: 'تموز' };
        this.months[7] = { code: '8', name: 'آب' };
        this.months[8] = { code: '9', name: 'أيلول' };
        this.months[9] = { code: '10', name: 'تشرين أول' };
        this.months[10] = { code: '11', name: 'تشرين ثاني' };
        this.months[11] = { code: '12', name: 'كانون أول' };
    }
    getYear() {
        if (!this.date)
            return 'السنة';
        if (this.viewMode == 'year')
            return this.date;
        var date = new Date(this.date);
        return (date.getFullYear() > 0 ? date.getFullYear() : 'السنة');
    }
    getMonth() {
        if (!this.date)
            return 'الشهر';
        var date = new Date(this.date);
        return (date.getMonth() >= 0 ? this.getMonths()[date.getMonth()].name : 'الشهر');
    }
    getDay() {
        if (!this.date)
            return 'اليوم';
        var date = new Date(this.date);
        return (date.getDate() > 0 ? date.getDate() : 'اليوم');
    }
    reset() {
        this.date = null;
        this.dateChange.next(this.date);
    }
    setYear(year) {
        if (this.viewMode == 'year') {
            this.date = year.toString();
        }
        else {
            var date = new Date(this.date);
            date.setFullYear(year);
            //Raise event to set value
            this.date = date.toDateString();
        }
        this.dateChange.next(this.date);
    }
    setMonth(month) {
        var date = new Date(this.date);
        date.setMonth(month - 1);
        //Raise event to set value
        this.date = date.toDateString();
        this.dateChange.next(this.date);
    }
    setDay(day) {
        var date = new Date(this.date);
        date.setDate(day);
        //Raise event to set value
        this.date = date.toDateString();
        this.dateChange.next(this.date);
    }
    getDays(month, year) {
        if (month == 2)
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
        else
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    }
    getMonths() {
        return this.months;
    }
    getYears(min, max) {
        let years = [];
        var index = 0;
        for (var i = max; i >= min; i--) {
            years[index++] = i;
        }
        return years;
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TechnoDatePickerComponent.prototype, "dateChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TechnoDatePickerComponent.prototype, "viewMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TechnoDatePickerComponent.prototype, "date", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TechnoDatePickerComponent.prototype, "minYear", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TechnoDatePickerComponent.prototype, "maxYear", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TechnoDatePickerComponent.prototype, "label", void 0);
TechnoDatePickerComponent = __decorate([
    core_1.Component({
        templateUrl: './app/shared/techno-datepicker.component.html',
        selector: 'techno-datepicker'
    }),
    __metadata("design:paramtypes", [])
], TechnoDatePickerComponent);
exports.TechnoDatePickerComponent = TechnoDatePickerComponent;
//# sourceMappingURL=techno-datepicker.component.js.map