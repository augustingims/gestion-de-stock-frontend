import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { catchError, tap, shareReplay } from 'rxjs/operators';
import { ChangerMotDePasseUtilisateurDto } from 'src/gs-api/src/models';
import { UtilisateurDto } from 'src/gs-api/src/models/utilisateur-dto';
import { UtilisateursService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userIdentity: UtilisateurDto | null = null;
  private authenticationState = new ReplaySubject<UtilisateurDto | null>(1);
  private accountCache$?: Observable<UtilisateurDto | null>;

  constructor(
    private utilisateurService: UtilisateursService,
  ) { }

  getCurrentUser(): Observable<UtilisateurDto> {
    return this.utilisateurService.currentUser();
  }

  identity(force?: boolean): Observable<UtilisateurDto | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.getCurrentUser().pipe(
        catchError(() => of(null)),
        tap((account: UtilisateurDto | null) => {
          this.authenticate(account);
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  authenticate(identity: UtilisateurDto | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<UtilisateurDto | null> {
    return this.authenticationState.asObservable();
  }

  changePassword(changePassword: ChangerMotDePasseUtilisateurDto): Observable<UtilisateurDto>{
    return this.utilisateurService.changePassword(changePassword);
  }
}
