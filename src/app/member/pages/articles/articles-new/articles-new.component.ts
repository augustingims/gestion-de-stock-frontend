import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AccountService } from '../../../../core/auth/account.service';
import { UtilisateurDto } from '../../../../../gs-api/src/models/utilisateur-dto';
import {ArticleDto} from '../../../../../gs-api/src/models/article-dto';
import {CategorieDto} from '../../../../../gs-api/src/models/categorie-dto';
import { PhotosService } from '../../../../../gs-api/src/services/photos.service';
import { ArticleService } from '../service/article.service';
import { CategoryService } from '../../categories/service/category.service';
import {Observable, Subscription} from 'rxjs';

import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-articles-new',
  templateUrl: './articles-new.component.html',
  styleUrls: ['./articles-new.component.scss']
})
export class ArticlesNewComponent implements OnInit, OnDestroy {

  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  articleDto: ArticleDto = {};
  categorieDto: CategorieDto = {};
  listeCategorie$: Observable<CategorieDto[] | []>;
  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private categoryService: CategoryService,
    private photoService: PhotosService
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.listeCategorie$ = this.categoryService.findAll();
    this.getArticle();
  }

  cancelClick(): void{
    this.router.navigate(['articles']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  getArticle(): void{
    const idArticle = this.activatedRoute.snapshot.params.idArticle;
    if (idArticle) {
      this.articleService.findArticleById(idArticle)
        .subscribe(article => {
          this.articleDto = article;
          this.categorieDto = this.articleDto.categorie ? this.articleDto.categorie : {};
        });
    }
  }

  createArticle(): void {
    this.articleDto.idEntreprise = this.account.entreprise.id;
    this.articleDto.categorie = this.categorieDto;
    this.articleService.save(this.articleDto)
      .subscribe(art => {
        this.savePhoto(art.id, art.codeArticle);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }

  calculerTTC(): void {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
      // prixHT + (prixHT * (tauxTVA / 100))
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100)));
    }
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

  savePhoto(idArticle?: number, titre?: string): void {
    if (idArticle && titre && this.file) {
      const params: SavePhotoParams = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'article'
      };
      this.photoService.savePhoto(params)
        .subscribe(res => {
          this.router.navigate(['articles']);
        });
    } else {
      this.router.navigate(['articles']);
    }
  }
}
