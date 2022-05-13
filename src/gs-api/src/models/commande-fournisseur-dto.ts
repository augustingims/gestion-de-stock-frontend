/* tslint:disable */
import { FournisseurDto } from './fournisseur-dto';
import { LigneCommandeFournisseurDto } from './ligne-commande-fournisseur-dto';
export interface CommandeFournisseurDto {
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  fournisseur?: FournisseurDto;
  id?: number;
  idEntreprise?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
}
