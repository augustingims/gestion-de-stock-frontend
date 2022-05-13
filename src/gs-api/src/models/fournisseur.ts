/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeFournisseur } from './commande-fournisseur';
export interface Fournisseur {
  adresse?: Adresse;
  commandeFournisseurs?: Array<CommandeFournisseur>;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
