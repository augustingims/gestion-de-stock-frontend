import { Injectable } from '@angular/core';
import {AuthenticationService} from '../../../gs-api/src/services/authentication.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';
import {AuthenticationResponse} from '../../../gs-api/src/models/authentication-response';
import { AccountService } from './account.service';
import {delay, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(
    private authenficationService: AuthenticationService,
    private accountService: AccountService,
    private router: Router
  ) { }

  login(authentificationRequest: AuthenticationRequest): Observable<void> {
     return this.authenficationService.authenticate(authentificationRequest)
      .pipe(map(response => this.authenficationSuccess(response)));
  }

  private authenficationSuccess(authentificationResponse: AuthenticationResponse): void {
    localStorage.setItem('access_token', authentificationResponse.accessToken);
    const expirationDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 10));
    this.logoutTimer(expirationDate.getTime());
  }

  getToken(): string {
    const token: string | null = localStorage.get('access_token');
    return token;
  }

  isAuthentificated(): boolean{
    if (localStorage.getItem('access_token')){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  private logoutTimer(expirationTime: number): void {
    of(true).pipe(delay(expirationTime)).subscribe(_ => {
      localStorage.removeItem('access_token');
      this.accountService.authenticate(null);
      this.router.navigate(['login']);
    });
  }

  logout(): Observable<void> {
    return new Observable( observer => {
      localStorage.removeItem('access_token');
      observer.complete();
    });
  }

  logoutWithoutObserver(): void {
    localStorage.removeItem('access_token');
    this.accountService.authenticate(null);
    this.router.navigate(['login']);
  }
}
