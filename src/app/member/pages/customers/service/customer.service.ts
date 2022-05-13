import { Injectable } from '@angular/core';
import { ClientsService } from '../../../../../gs-api/src/services/clients.service';
import { ClientDto } from '../../../../../gs-api/src/models/client-dto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private clientService: ClientsService
  ) { }

  save(clientDto: ClientDto): Observable<ClientDto> {
    return this.clientService.save(clientDto);
  }

  findAll(): Observable<ClientDto[]> {
    return this.clientService.findAll();
  }

  findById(id: number): Observable<ClientDto> {
    if (id) {
      return this.clientService.findById(id);
    }
    return of();
  }

  deleteCustomer(idClient: number): Observable<any> {
    if (idClient) {
      return this.clientService.delete(idClient);
    }
    return of();
  }
}
