import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {ArticleDto} from '../../../../gs-api/src/models/article-dto';
import { ArticleService } from '../../pages/articles/service/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit {

  @Input()
  articleDto: ArticleDto = {};
  @Output()
  deleteResult = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

  updateArticle(): void {
    this.router.navigate(['articles', this.articleDto.id, 'edit']);
  }

  confirmAndDeleteArticle(): void {
    if (this.articleDto.id) {
      this.articleService.deleteArticle(this.articleDto.id)
        .subscribe(res => {
          this.deleteResult.emit('success');
        }, error => {
          this.deleteResult.emit(error.error.error);
        });
    }
  }

}
