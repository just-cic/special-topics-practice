import { Component, Input, Output, ViewChild, ElementRef, OnInit, EventEmitter } from '@angular/core';

@Component({
    templateUrl: './app/shared/techno-widget.component.html',
    selector: 'techno-widget'
})
export class TechnoWidgetComponent implements OnInit {
    
    @Input() private title: string;
    @Input() private value: string;
    @Input() private valueSubscript: string;
    @Input() private valueType: string;
    @Input() private valueCaption: string;
    @Input() private theme: string;

    constructor() {
    }

    ngOnInit() {
    }
}
