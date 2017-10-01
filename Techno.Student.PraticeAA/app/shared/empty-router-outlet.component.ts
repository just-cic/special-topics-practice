import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router'

@Component({
    template: '<div class="panel panel-default"><div class="panel-heading"><h4>{{title}}</h4></div><div class="panel-body" style="min-height: 500px; padding-top: 50px;"><router-outlet></router-outlet></div></div>'
})
export class EmptyRouterOutletComponent {
    private title: string = 'عنوان الصفحة';

    constructor(private route: ActivatedRoute) {
    }
}
