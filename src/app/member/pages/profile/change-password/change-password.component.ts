import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ChangerMotDePasseUtilisateurDto } from '../../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';
import { UtilisateurDto } from '../../../../../gs-api/src/models/utilisateur-dto';
import { AccountService } from '../../../../core/auth/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  oldPassword = '';

  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription'){
      this.oldPassword = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }

  cancelClick(): void{
    this.router.navigate(['profil']);
  }

  changePassword(): void{
    this.changerMotDePasseDto.id = this.account.id;
    this.accountService.changePassword(this.changerMotDePasseDto).subscribe(data => {
      this.router.navigate(['profil']);
    }, error => {

    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

}
