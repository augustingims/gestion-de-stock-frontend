import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { CategoryService } from '../service/category.service';
import { AccountService } from '../../../../core/auth/account.service';
import { UtilisateurDto } from '../../../../../gs-api/src/models/utilisateur-dto';
import {CategorieDto} from '../../../../../gs-api/src/models/categorie-dto';

@Component({
  selector: 'app-categories-new',
  templateUrl: './categories-new.component.html',
  styleUrls: ['./categories-new.component.scss']
})
export class CategoriesNewComponent implements OnInit, OnDestroy {

  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  categoryDto: CategorieDto = {};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.getCategory();
  }

  cancelClick(): void{
    this.router.navigate(['categories']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  createCategory(): void {

    this.categoryDto.idEntreprise = this.account.entreprise.id;

    this.categoryService.save(this.categoryDto)
      .subscribe(res => {
        this.router.navigate(['categories']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }

  getCategory(): void{
    const idCategory = this.activatedRoute.snapshot.params.idCategory;
    if (idCategory) {
      this.categoryService.findById(idCategory)
        .subscribe(cat => {
          this.categoryDto = cat;
        });
    }
  }

}
