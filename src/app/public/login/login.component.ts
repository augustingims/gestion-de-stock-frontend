import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthJwtService } from '../../core/auth/auth-jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  loginForm = this.fb.group({
    login: [],
    password: []
  });

  constructor(
    private fb: FormBuilder,
    private authJwtService: AuthJwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    const loginRequest = this.loginForm.value;
    this.authJwtService.login(loginRequest).subscribe(res => {
      this.router.navigate(['']);
    }, error => {
      this.errorMessage = error?.error?.message;
    });
  }


}
