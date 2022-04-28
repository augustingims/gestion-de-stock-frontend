import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cmd-customer-supplier-list',
  templateUrl: './cmd-customer-supplier-list.component.html',
  styleUrls: ['./cmd-customer-supplier-list.component.scss']
})
export class CmdCustomerSupplierListComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;
  origin: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getOrigin();
  }

  newOrder(): void{
    const page = this.getPage();
    this.router.navigate([page]);
  }

  getOrigin(): void{
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }

  getPage(): string{
    if (this.origin === 'client') {
      return 'commandesclient/nouvellecommande';
    } else  if (this.origin === 'fournisseur') {
      return 'commandesfournisseur/nouvellecommande';
    }
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription){
      this.activatedRouteSubscription.unsubscribe();
    }
  }
}
