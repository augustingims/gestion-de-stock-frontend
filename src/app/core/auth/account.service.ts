import { Injectable } from '@angular/core';
import {UtilisateursService} from '../../../gs-api/src/services/utilisateurs.service';
import {UtilisateurDto} from '../../../gs-api/src/models/utilisateur-dto';
import {ChangerMotDePasseUtilisateurDto} from '../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';
import {Observable, of, ReplaySubject} from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';

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
