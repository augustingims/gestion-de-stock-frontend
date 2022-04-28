import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-cmd-costumer-supplier',
  templateUrl: './new-cmd-costumer-supplier.component.html',
  styleUrls: ['./new-cmd-costumer-supplier.component.scss']
})
export class NewCmdCostumerSupplierComponent implements OnInit, OnDestroy {

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
      this.router.navigate(['commandesclient']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['commandesfournisseur']);
    }
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription){
      this.activatedRouteSubscription.unsubscribe();
    }
  }

}
