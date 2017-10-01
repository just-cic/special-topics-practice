import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { ErpCoreModule } from './erp-core/erp-core.module';
import { SharedModule } from './shared/shared.module';
import { ErpSharedModule } from './erp-shared/erp-shared.module';

import { Exercise01Module } from './exercise-01/exercise-01.module';

import { AppComponent } from './app.component';

import { Exercise01RoutingModule } from './exercise-01/exercise-01-routing.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule, Exercise01RoutingModule, AppRoutingModule, HttpModule, FormsModule, CoreModule, ErpCoreModule, SharedModule, ErpSharedModule, Exercise01Module ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent]
})
export class AppModule {
    
  constructor() {}
}
