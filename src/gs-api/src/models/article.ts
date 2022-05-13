/* tslint:disable */
import { Categorie } from './categorie';
import { LigneCommandeClient } from './ligne-commande-client';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
import { LigneVente } from './ligne-vente';
import { MvtStk } from './mvt-stk';
export interface Article {
  categorie?: Categorie;
  codeArticle?: string;
  creationDate?: number;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneCommandeClients?: Array<LigneCommandeClient>;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
  ligneVentes?: Array<LigneVente>;
  mvtStks?: Array<MvtStk>;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
