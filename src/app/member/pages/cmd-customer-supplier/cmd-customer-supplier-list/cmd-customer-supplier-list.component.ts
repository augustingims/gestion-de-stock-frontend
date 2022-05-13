import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { CmdCustomerSupplierService } from '../service/cmd-customer-supplier.service';
import { LigneCommandeClientDto } from '../../../../../gs-api/src/models/ligne-commande-client-dto';

@Component({
  selector: 'app-cmd-customer-supplier-list',
  templateUrl: './cmd-customer-supplier-list.component.html',
  styleUrls: ['./cmd-customer-supplier-list.component.scss']
})
export class CmdCustomerSupplierListComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;

  origin = '';
  orders: Array<any> = [];
  mapLignesOrder = new Map();
  mapPriceTotalOrder = new Map();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cmdCustomerSupplierService: CmdCustomerSupplierService
  ) { }

  ngOnInit(): void {
    this.getOrigin();
    this.findAll();
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

  findAll(): void {
    if (this.origin === 'client') {
      this.cmdCustomerSupplierService.findAllOrderCustomer()
        .subscribe(cmd => {
          this.orders = cmd;
          this.findAllLignesOrder();
        });
    } else if (this.origin === 'fournisseur') {
      this.cmdCustomerSupplierService.findAllOrderSupplier()
        .subscribe(cmd => {
          this.orders = cmd;
          this.findAllLignesOrder();
        });
    }
  }

  findAllLignesOrder(): void {
    this.orders.forEach(cmd => {
      this.findLignesOrder(cmd.id);
    });
  }


  findLignesOrder(idCommande?: number): void {
    if (this.origin === 'client') {
      this.cmdCustomerSupplierService.findAllLigneOrderCustomer(idCommande)
        .subscribe(list => {
          this.mapLignesOrder.set(idCommande, list);
          this.mapPriceTotalOrder.set(idCommande, this.calculerTotalCmd(list));
        });
    } else if (this.origin === 'fournisseur') {
      this.cmdCustomerSupplierService.findAllLigneOrderSupplier(idCommande)
        .subscribe(list => {
          this.mapLignesOrder.set(idCommande, list);
          this.mapPriceTotalOrder.set(idCommande, this.calculerTotalCmd(list));
        });
    }
  }

  calculerTotalCmd(list: Array<LigneCommandeClientDto>): number {
    let total = 0;
    list.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        total += +ligne.quantite * +ligne.prixUnitaire;
      }
    });
    return Math.floor(total);
  }

  calculerTotalOrder(id?: number): number {
    return this.mapPriceTotalOrder.get(id);
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
