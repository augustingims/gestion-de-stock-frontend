/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface EntrepriseDto {
  adresse?: AdresseDto;
  codeFiscal?: string;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  steWeb?: string;
}
