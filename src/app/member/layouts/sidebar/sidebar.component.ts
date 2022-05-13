import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../core/auth/account.service';
import { AuthJwtService } from '../../../core/auth/auth-jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService,
    private authJwtService: AuthJwtService
  ) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.authJwtService.logout().subscribe({ complete: () => {
        this.accountService.authenticate(null);
        this.router.navigate(['login']);
      }
    });
  }


}
