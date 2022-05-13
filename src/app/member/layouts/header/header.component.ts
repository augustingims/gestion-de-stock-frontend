import {Component, OnDestroy, OnInit} from '@angular/core';
import { AccountService } from '../../../core/auth/account.service';
import { Subscription } from 'rxjs';
import { UtilisateurDto } from '../../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  account: UtilisateurDto | null = {};
  authSubscription?: Subscription;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.accountService.identity().subscribe();
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

}
