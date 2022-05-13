import { Injectable } from '@angular/core';
import { CommandesclientsService } from '../../../../../gs-api/src/services/commandesclients.service';
import { CommandefournisseurService } from '../../../../../gs-api/src/services/commandefournisseur.service';
import { CommandeClientDto } from '../../../../../gs-api/src/models/commande-client-dto';
import { CommandeFournisseurDto } from '../../../../../gs-api/src/models/commande-fournisseur-dto';
import { LigneCommandeClientDto } from '../../../../../gs-api/src/models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../../../../../gs-api/src/models/ligne-commande-fournisseur-dto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmdCustomerSupplierService {

  constructor(
    private commandeClientService: CommandesclientsService,
    private commandeFournisseurService: CommandefournisseurService
  ) { }

  saveOrderCustomer(commandeClient: CommandeClientDto): Observable<CommandeClientDto> {
    return this.commandeClientService.save(commandeClient);
  }

  saveOrderSupplier(commandeFournisseurDto: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    return this.commandeFournisseurService.save(commandeFournisseurDto);
  }

  findAllOrderCustomer(): Observable<CommandeClientDto[]> {
    return this.commandeClientService.findAll();
  }

  findAllOrderSupplier(): Observable<CommandeFournisseurDto[]> {
    return this.commandeFournisseurService.findAll();
  }

  findAllLigneOrderCustomer(idCmd?: number): Observable<LigneCommandeClientDto[]> {
    if (idCmd) {
      return this.commandeClientService.findAllLignesCommandesClientByCommandeClientId(idCmd);
    }
    return of();
  }

  findAllLigneOrderSupplier(idCmd?: number): Observable<LigneCommandeFournisseurDto[]> {
    if (idCmd) {
      return this.commandeFournisseurService.findAllLignesCommandesFournisseurByCommandeFournisseurId(idCmd);
    }
    return of();
  }
}
