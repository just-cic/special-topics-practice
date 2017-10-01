import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //Cannot bind to ngIf
import { RouterModule } from '@angular/router'; //Cannot bind to routerLink
import { FormsModule } from '@angular/forms'; //Cannot bind to ngModel
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [HttpModule, CommonModule, RouterModule, FormsModule/*, Angular2SocialLoginModule, ModalModule.forRoot(), BootstrapModalModule*/],
    declarations: [/*LoginComponent*/],
    providers: [/* Services */],
    exports: [/*LoginComponent*/]
})
export class CoreModule {

}

//Angular2SocialLoginModule.loadProvidersScripts(providers);
