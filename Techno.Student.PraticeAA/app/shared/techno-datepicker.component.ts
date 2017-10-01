import { Component, Input, Output, ViewChild, ElementRef, OnInit, EventEmitter } from '@angular/core';

@Component({
    templateUrl: './app/shared/techno-datepicker.component.html',
    selector: 'techno-datepicker'
})
export class TechnoDatePickerComponent implements OnInit {

    @Output() dateChange = new EventEmitter<string>();

    @Input() private viewMode: string = 'day';
    @Input() private date: string; //It will be assigned as string
    @Input() private minYear: number = 1990;
    @Input() private maxYear: number = 2017;
    @Input() private label: string = '';

    private internal_date: Date;

    private months: any[];

    constructor() {
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

        if (!this.date) return 'السنة';
        if (this.viewMode == 'year') return this.date;

        var date: Date = new Date(this.date);

        return (date.getFullYear() > 0 ? date.getFullYear() : 'السنة');
    }

    getMonth() {

        if (!this.date) return 'الشهر';

        var date: Date = new Date(this.date);

        return (date.getMonth() >= 0 ? this.getMonths()[date.getMonth()].name : 'الشهر');
    }

    getDay() {

        if (!this.date) return 'اليوم';

        var date: Date = new Date(this.date);

        return (date.getDate() > 0 ? date.getDate() : 'اليوم');
    }

    reset() {
        this.date = null;
        this.dateChange.next(this.date);
    }

    setYear(year: number) {

        if (this.viewMode == 'year') {
            this.date = year.toString();
        }
        else {
            var date: Date = new Date(this.date);

            date.setFullYear(year);

            //Raise event to set value
            this.date = date.toDateString();
        }
        
        this.dateChange.next(this.date);
    }

    setMonth(month: number) {
        var date: Date = new Date(this.date);

        date.setMonth(month - 1);

        //Raise event to set value
        this.date = date.toDateString();
        this.dateChange.next(this.date);
    }

    setDay(day: number) {
        var date: Date = new Date(this.date);

        date.setDate(day);

        //Raise event to set value
        this.date = date.toDateString();
        this.dateChange.next(this.date);
    }

    getDays(month: number, year: number) {
        if (month == 2)
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
        else
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    }

    getMonths() {
        return this.months;
    }

    getYears(min: number, max: number) {
        let years: number[] = [];

        var index = 0;
        for (var i = max; i >= min; i--) {
            years[index++] = i;
        }

        return years;
    }
}
