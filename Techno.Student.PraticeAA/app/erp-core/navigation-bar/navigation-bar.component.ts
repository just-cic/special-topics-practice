import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

class MainMenuItem {
    constructor(
        public type: number,
        public name?: string,
        public path?: string
    )
    { }
}

@Component({
    selector: 'navigation-bar',
    templateUrl: './app/erp-core/navigation-bar/navigation-bar.component.html',
})
export class NavigationBarComponent implements OnInit {

    private systems: any[];
    private activeSystem: any;
    
    constructor() {
        this.systems = [];
    }

    ngOnInit() {
        
    }

    logout() {
        
    }
}
