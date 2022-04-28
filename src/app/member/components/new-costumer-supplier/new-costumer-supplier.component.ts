import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-costumer-supplier',
  templateUrl: './new-costumer-supplier.component.html',
  styleUrls: ['./new-costumer-supplier.component.scss']
})
export class NewCostumerSupplierComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;
  origin: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getOrigin();
  }

  getOrigin(): void{
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }

  cancelClick(): void{
    if (this.origin === 'client'){
      this.router.navigate(['clients']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs']);
    }
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription){
      this.activatedRouteSubscription.unsubscribe();
    }
  }

}
