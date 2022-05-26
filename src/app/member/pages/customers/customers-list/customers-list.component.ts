import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { ClientDto } from '../../../../../gs-api/src/models/client-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers$: Observable<ClientDto[] | []>;
  errorMsg = '';

  constructor(
    private router: Router,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.customers$ = this.customerService.findAll();
  }

  newCustomer(): void {
    this.router.navigate(['clients/nouveau']);
  }

  handleDelete(event: any): void {
    if (event === 'success') {
      this.customers$ = this.customerService.findAll();
    } else {
      this.errorMsg = event;
    }
  }

  trackBy(index: number, item: ClientDto): number{
    return item.id;
  }

}
