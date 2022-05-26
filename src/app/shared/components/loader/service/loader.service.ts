import { Injectable } from '@angular/core';
import { LoaderState } from '../model/loader.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show(): void {
    this.loaderSubject.next({show: true});
  }

  hide(): void {
    this.loaderSubject.next({show: false});
  }
}