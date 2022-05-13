/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
