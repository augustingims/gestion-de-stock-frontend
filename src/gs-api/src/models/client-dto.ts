/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface ClientDto {
  adresse?: AdresseDto;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
