import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoaderState } from './model/loader.model';
import { LoaderService } from './service/loader.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;
  subscription: Subscription | undefined;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
