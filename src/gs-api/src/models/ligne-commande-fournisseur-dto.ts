/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseurDto {
  article?: ArticleDto;
  commandeFournisseur?: CommandeFournisseur;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
