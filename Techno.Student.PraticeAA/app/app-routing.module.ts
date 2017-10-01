
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { EmptyComponent } from './shared/empty.component';
//import { EmptyRouterOutletComponent } from './shared/empty-router-outlet.component';

import { WelcomeComponent } from './erp-core/welcome/welcome.component';

import { NotImplementedComponent } from './erp-core/not-implemented/not-implemented.component';

const routes: Routes = [
    //{ path: 'login', component: EmptyComponent },
    { path: '', component: WelcomeComponent },
    { path: '**', component: NotImplementedComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [];
