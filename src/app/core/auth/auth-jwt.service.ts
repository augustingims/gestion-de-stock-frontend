import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';
import { AuthenticationService } from 'src/gs-api/src/services';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(
    private authenficationService: AuthenticationService,
    private accountService: AccountService,
    private $localStorage: LocalStorageService,
    private router: Router
  ) { }

  login(authentificationRequest: AuthenticationRequest): Observable<void> {
     return this.authenficationService.authenticate(authentificationRequest)
      .pipe(map(response => this.authenficationSuccess(response)));
  }

  private authenficationSuccess(authentificationResponse: AuthenticationResponse): void {
    this.$localStorage.store('access_token', authentificationResponse.accessToken);
    const expirationDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 10));
    this.logoutTimer(expirationDate.getTime());
  }

  getToken(): string {
    const token: string | null = this.$localStorage.retrieve('access_token');
    return token;
  }

  isAuthentificated(): boolean{
    if (this.$localStorage.retrieve('access_token')){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  private logoutTimer(expirationTime: number): void {
    of(true).pipe(delay(expirationTime)).subscribe(_ => {
      this.$localStorage.clear('access_token');
      this.accountService.authenticate(null);
      this.router.navigate(['login']);
    });
  }

  logout(): Observable<void> {
    return new Observable( observer => {
      this.$localStorage.clear('access_token');
      observer.complete();
    });
  }

  logoutWithoutObserver(): void {
    this.$localStorage.clear('access_token');
    this.accountService.authenticate(null);
    this.router.navigate(['login']);
  }
}
