import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SupplierService } from '../service/supplier.service';
import { FournisseurDto } from '../../../../../gs-api/src/models/fournisseur-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {

  suppliers$: Observable<FournisseurDto[] | []>;
  errorMsg = '';

  constructor(
    private router: Router,
    private supplierService: SupplierService,
  ) { }

  ngOnInit(): void {
    this.suppliers$ = this.supplierService.findAll();
  }

  newSupplier(): void{
    this.router.navigate(['fournisseurs/nouveau']);
  }

  handleDelete(event: any): void {
    if (event === 'success') {
      this.suppliers$ = this.supplierService.findAll();
    } else {
      this.errorMsg = event;
    }
  }

  trackBy(index: number, item: FournisseurDto): number{
    return item.id;
  }

}
