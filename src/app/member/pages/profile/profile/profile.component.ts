import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UtilisateurDto } from '../../../../../gs-api/src/models/utilisateur-dto';
import { AccountService } from '../../../../core/auth/account.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  changePassword(): void {
    this.router.navigate(['changermotdepasse']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

}
