/* tslint:disable */
import { Article } from './article';
export interface Categorie {
  articles?: Array<Article>;
  code?: string;
  creationDate?: number;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
}
