/* tslint:disable */
import { ArticleDto } from './article-dto';
import { VentesDto } from './ventes-dto';
export interface LigneVenteDto {
  article?: ArticleDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: VentesDto;
}
