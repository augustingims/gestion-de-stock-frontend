import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { UtilisateurDto } from '../../../../gs-api/src/models/utilisateur-dto';
import { AdresseDto } from '../../../../gs-api/src/models/adresse-dto';
import { FournisseurDto } from '../../../../gs-api/src/models/fournisseur-dto';
import { ClientDto } from '../../../../gs-api/src/models/client-dto';
import { PhotosService } from '../../../../gs-api/src/services/photos.service';
import { AccountService } from '../../../core/auth/account.service';
import { CustomerService } from '../../pages/customers/service/customer.service';
import { SupplierService } from '../../pages/suppliers/service/supplier.service';
import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-new-costumer-supplier',
  templateUrl: './new-costumer-supplier.component.html',
  styleUrls: ['./new-costumer-supplier.component.scss']
})
export class NewCostumerSupplierComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;
  origin = '';

  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  clientFournisseur: any = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private accountService: AccountService,
    private customerService: CustomerService,
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotosService
  ) { }

  ngOnInit(): void {
    this.getOrigin();
    this.findObject();
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  getOrigin(): void{
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }

  findObject(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      if (this.origin === 'client') {
        this.customerService.findById(id)
          .subscribe(client => {
            this.clientFournisseur = client;
            this.adresseDto = this.clientFournisseur.adresse;
          });
      } else if (this.origin === 'fournisseur') {
        this.supplierService.findById(id)
          .subscribe(fournisseur => {
            this.clientFournisseur = fournisseur;
            this.adresseDto = this.clientFournisseur.adresse;
          });
      }
    }
  }

  save(): void {
    if (this.origin === 'client') {
      this.customerService.save(this.mapToCustomer())
        .subscribe(client => {
          this.savePhoto(client.id, client.nom);
        }, error => {
          this.errorMsg = error.error.errors;
        });
    } else if (this.origin === 'fournisseur') {
      this.supplierService.save(this.mapToSupplier())
        .subscribe(fournisseur => {
          this.savePhoto(fournisseur.id, fournisseur.nom);
        }, error => {
          this.errorMsg = error.error.errors;
        });
    }
  }

  mapToCustomer(): ClientDto {
    const clientDto: ClientDto = this.clientFournisseur;
    clientDto.adresse = this.adresseDto;
    clientDto.idEntreprise = this.account.entreprise.id;
    return clientDto;
  }

  mapToSupplier(): FournisseurDto {
    const fournisseurDto: FournisseurDto = this.clientFournisseur;
    fournisseurDto.adresse = this.adresseDto;
    fournisseurDto.idEntreprise = this.account.entreprise.id;
    return fournisseurDto;
  }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

  savePhoto(idObject?: number, titre?: string): void {
    if (idObject && titre && this.file) {
      const params: SavePhotoParams = {
        id: idObject,
        file: this.file,
        title: titre,
        context: this.origin
      };
      this.photoService.savePhoto(params)
        .subscribe(res => {
          this.cancelClick();
        });
    } else {
      this.cancelClick();
    }
  }

  cancelClick(): void{
    if (this.origin === 'client'){
      this.router.navigate(['clients']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs']);
    }
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription){
      this.activatedRouteSubscription.unsubscribe();
    }

    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

}
