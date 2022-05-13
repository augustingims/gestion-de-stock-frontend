import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { EntrepriseDto } from '../../../gs-api/src/models/entreprise-dto';
import { AdresseDto } from '../../../gs-api/src/models/adresse-dto';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { EntreprisesService } from '../../../gs-api/src/services/entreprises.service';
import { AuthJwtService } from '../../core/auth/auth-jwt.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  entrepriseDto: EntrepriseDto = {};
  adresseDto: AdresseDto = {};
  errorsMsg: Array<string> = [];

  constructor(
    private router: Router,
    private entrepriseService: EntreprisesService,
    private authJwtService: AuthJwtService
  ) { }

  ngOnInit(): void {
  }

  createEntreprise(): void {
    this.entrepriseDto.adresse = this.adresseDto;
    this.entrepriseService.save(this.entrepriseDto).subscribe(res => {
      this.connectUser();
    }, error => {
      this.errorsMsg = error.error.errors;
    });
}

  connectUser(): void{
    const authenficationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password: 'som3R@nd0mP@$$word'
    };
    this.authJwtService.login(authenficationRequest).subscribe(data => {
      localStorage.setItem('origin', 'inscription');
      this.router.navigate(['changermotdepasse']);
    });
  }

}
