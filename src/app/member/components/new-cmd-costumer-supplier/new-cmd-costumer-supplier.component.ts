import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CmdCustomerSupplierService } from '../../pages/cmd-customer-supplier/service/cmd-customer-supplier.service';
import { ArticleService } from '../../pages/articles/service/article.service';
import { CustomerService } from '../../pages/customers/service/customer.service';
import { SupplierService } from '../../pages/suppliers/service/supplier.service';
import { AccountService } from '../../../core/auth/account.service';
import { UtilisateurDto } from '../../../../gs-api/src/models/utilisateur-dto';
import { LigneCommandeClientDto } from '../../../../gs-api/src/models/ligne-commande-client-dto';
import { CommandeClientDto } from '../../../../gs-api/src/models/commande-client-dto';
import { CommandeFournisseurDto } from '../../../../gs-api/src/models/commande-fournisseur-dto';
import { ArticleDto } from '../../../../gs-api/src/models/article-dto';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-cmd-costumer-supplier',
  templateUrl: './new-cmd-costumer-supplier.component.html',
  styleUrls: ['./new-cmd-costumer-supplier.component.scss']
})
export class NewCmdCostumerSupplierComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;

  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  origin = '';
  selectedClientFournisseur: any = {};
  searchedArticle: ArticleDto = {};

  listArticle: Array<ArticleDto> = [];
  listClientsFournisseurs: Array<any> = [];
  errorMsg: Array<string> = [];
  lignesCommande: Array<any> = [];

  codeArticle = '';
  quantite = '';
  codeCommande = '';

  totalCommande = 0;
  articleNotYetSelected = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cmdCustomerSupplierService: CmdCustomerSupplierService,
    private customerService: CustomerService,
    private supplierService: SupplierService,
    private articleService: ArticleService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.getOrigin();
    this.findAll();
  }

  getOrigin(): void{
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }

  findAll(): void {
    if (this.origin === 'client') {
      this.customerService.findAll()
        .subscribe(clients => {
          this.listClientsFournisseurs = clients;
        });
    } else if (this.origin === 'fournisseur' ) {
      this.supplierService.findAll()
        .subscribe(fournisseurs => {
          this.listClientsFournisseurs = fournisseurs;
        });
    }
  }

  findAllArticles(): void {
    this.articleService.findAllArticles()
      .subscribe(articles => {
        this.listArticle = articles;
      });
  }

  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle
      .filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }

  addLigneOrder(): void {
    this.checkLigneOrder();
    this.calculerTotalOrder();

    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }

  calculerTotalOrder(): void {
    this.totalCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totalCommande += +ligne.prixUnitaire * +ligne.quantite;
      }
    });
  }

  private checkLigneOrder(): void {
    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle);
    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeClientDto = {
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligneCmd);
    }
  }

  selectArticleClick(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle ? article.codeArticle : '';
    this.articleNotYetSelected = true;
  }

  saveOrder(): void {
    const commande = this.prepareOrder();
    if (this.origin === 'client') {
      this.cmdCustomerSupplierService.saveOrderCustomer(commande as CommandeClientDto)
        .subscribe(cmd => {
          this.router.navigate(['commandesclient']);
        }, error => {
          this.errorMsg = error.error.errors;
        });
    } else if (this.origin === 'fournisseur') {
      this.cmdCustomerSupplierService.saveOrderSupplier(commande as CommandeFournisseurDto)
        .subscribe(cmd => {
          this.router.navigate(['commandesfournisseur']);
        }, error => {
          this.errorMsg = error.error.errors;
        });
    }
  }

  private prepareOrder(): any {
    if (this.origin === 'client') {
      return  {
        client: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande,
        idEntreprise: this.account.entreprise.id
      };
    } else if (this.origin === 'fournisseur') {
      return  {
        fournisseur: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeFournisseurs: this.lignesCommande,
        idEntreprise: this.account.entreprise.id
      };
    }
  }

  cancelClick(): void{
    if (this.origin === 'client'){
      this.router.navigate(['commandesclient']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['commandesfournisseur']);
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
