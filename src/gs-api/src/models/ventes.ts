/* tslint:disable */
import { LigneVente } from './ligne-vente';
export interface Ventes {
  code?: string;
  commentaire?: string;
  creationDate?: number;
  dateVente?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneVentes?: Array<LigneVente>;
}
