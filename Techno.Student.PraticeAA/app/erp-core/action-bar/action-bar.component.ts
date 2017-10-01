import { Component, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ActionBarService } from './action-bar.service';

@Component({
  selector: 'action-bar',
  templateUrl: './app/erp-core/action-bar/action-bar.component.html',
})
export class ActionBarComponent {

  private subscription : Subscription;

  private actions: object[];
  private showActionBar : boolean;

  constructor(private service : ActionBarService) {
      this.subscription = this.service.allowedActions.subscribe((actions: object[]) => {
        this.actions = actions;
        this.showActionBar =  (actions && actions.length > 0);
      });
  }

  private takeAction(action: number) {
    this.service.takeAction(action);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
