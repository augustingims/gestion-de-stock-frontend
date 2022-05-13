/* tslint:disable */
import { CategorieDto } from './categorie-dto';
export interface ArticleDto {
  categorie?: CategorieDto;
  codeArticle?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
