import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ArticleService } from '../service/article.service';
import {ArticleDto} from '../../../../../gs-api/src/models/article-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles$: Observable<ArticleDto[] | []>;
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.findAllArticles();
  }

  newArticle(): void {
    this.router.navigate(['articles/nouveau']);
  }

  handleDelete(event: any): void {
    if (event === 'success') {
      this.articles$ = this.articleService.findAllArticles();
    } else {
      this.errorMsg = event;
    }
  }

  trackBy(index: number, item: ArticleDto): number{
    return item.id;
  }

}
