import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UtilisateurDto } from '../../../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  newUser(): void{
    this.router.navigate(['utilisateurs/nouvel']);
  }

  trackBy(index: number, item: UtilisateurDto): number{
    return item.id;
  }
}
