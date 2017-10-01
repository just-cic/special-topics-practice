import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //Cannot bind to routerLink

import { ActionBarService } from './action-bar/action-bar.service';

import { ErpLookupService } from './erp-lookup.service'
import { PermissionsService } from './permissions.service'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component'

@NgModule({
    imports: [BrowserModule, RouterModule],
    declarations: [NavigationBarComponent, ActionBarComponent, WelcomeComponent, NotImplementedComponent],
    providers: [ErpLookupService, ActionBarService, PermissionsService],
    exports: [NavigationBarComponent, ActionBarComponent, WelcomeComponent, NotImplementedComponent]
})
export class ErpCoreModule {

}