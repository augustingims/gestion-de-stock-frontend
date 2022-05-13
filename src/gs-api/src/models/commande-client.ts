/* tslint:disable */
import { Client } from './client';
import { LigneCommandeClient } from './ligne-commande-client';
export interface CommandeClient {
  client?: Client;
  code?: string;
  creationDate?: number;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneCommandeClients?: Array<LigneCommandeClient>;
}
