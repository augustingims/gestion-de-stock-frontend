import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoryService } from '../service/category.service';
import {Observable} from 'rxjs';
import {CategorieDto} from '../../../../../gs-api/src/models/categorie-dto';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories$: Observable<CategorieDto[] | []>;
  selectedCatIdToDelete ? = -1;
  errorMsgs = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.findAll();
  }

  newCategory(): void{
    this.router.navigate(['categories/nouvelle']);
  }

  updateCategory(id?: number): void {
    this.router.navigate(['categories', id, 'edit']);
  }

  confirmDelete(): void {
    if (this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete)
        .subscribe(res => {
          this.categories$ = this.categoryService.findAll();
        }, error => {
          this.errorMsgs = error.error.message;
        });
    }
  }

  cancelDelete(): void {
    this.selectedCatIdToDelete = -1;
  }

  selectCategoryForDelete(id?: number): void {
    this.selectedCatIdToDelete = id;
  }

  trackBy(index: number, item: CategorieDto): number{
    return item.id;
  }

}
