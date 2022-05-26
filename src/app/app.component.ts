import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs';
import { RouteHelperService } from './shared/service/route-helper.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'gestionstock';

  serviceSubscription: Subscription = new Subscription();

  constructor(
    private swUpdate: SwUpdate,
    private routeHelper: RouteHelperService
    ) {}

  ngOnInit(): void {
    if (this.swUpdate.isEnabled){
      this.serviceSubscription.add(this.swUpdate.available.subscribe(() => {
        this.swUpdate.activateUpdate().then(() => document.location.reload());
      }));
    }
  }

  ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
  }
}
