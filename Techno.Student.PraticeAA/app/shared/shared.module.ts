import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmptyComponent } from './empty.component';
import { EmptyRouterOutletComponent } from './empty-router-outlet.component';
import { TechnoDatePickerComponent } from './techno-datepicker.component';
import { TechnoWidgetComponent } from './techno-widget.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmptyComponent, EmptyRouterOutletComponent, TechnoDatePickerComponent, TechnoWidgetComponent],
  providers: [],
  exports: [EmptyComponent, EmptyRouterOutletComponent, TechnoDatePickerComponent, TechnoWidgetComponent]
})
export class SharedModule { }
