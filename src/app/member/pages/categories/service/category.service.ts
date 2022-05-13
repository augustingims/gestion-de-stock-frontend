import { Injectable } from '@angular/core';
import { CategoriesService } from '../../../../../gs-api/src/services/categories.service';
import {CategorieDto} from '../../../../../gs-api/src/models/categorie-dto';
import {Observable, of} from 'rxjs';
import { AccountService } from '../../../../core/auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private categoriesService: CategoriesService,
    private accountService: AccountService,
  ) { }

  save(categoryDto: CategorieDto): Observable<CategorieDto> {
    return this.categoriesService.save(categoryDto);
  }

  findAll(): Observable<CategorieDto[]> {
    return this.categoriesService.findAll();
  }

  findById(idCategory: number): Observable<CategorieDto> {
    return this.categoriesService.findById(idCategory);
  }

  delete(idCategorie?: number): Observable<any> {
    if (idCategorie) {
      return this.categoriesService.delete(idCategorie);
    }
    return of();
  }
}
