import { Injectable } from '@angular/core';
import { FournisseurService } from '../../../../../gs-api/src/services/fournisseur.service';
import { FournisseurDto } from '../../../../../gs-api/src/models/fournisseur-dto';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private fournisseurService: FournisseurService
  ) { }


  save(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    return this.fournisseurService.save(fournisseurDto);
  }

  findAll(): Observable<FournisseurDto[]> {
    return this.fournisseurService.findAll();
  }

  findById(id: number): Observable<FournisseurDto> {
    if (id) {
      return this.fournisseurService.findById(id);
    }
    return of();
  }


  deleteSupplier(idFournisseur: number): Observable<any> {
    if (idFournisseur) {
      return this.fournisseurService.delete(idFournisseur);
    }
    return of();
  }
}
