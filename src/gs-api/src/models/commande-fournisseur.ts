/* tslint:disable */
import { Fournisseur } from './fournisseur';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
export interface CommandeFournisseur {
  code?: string;
  creationDate?: number;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  fournisseur?: Fournisseur;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
}
