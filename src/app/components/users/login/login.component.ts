import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onLoginUser(): void {
    console.log(this.email);
    console.log(this.password);
   this.authService.loginEmailUser(this.email, this.password)
    .then( (res) => {
      this.Redirect();
    }).catch( err => console.log('Error: ', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then ((res) => {
      //console.log('resUser', res);//Para imprimir la respuesta(data) del usuario
      this.Redirect();
    }).catch(err => console.log('Error: ', err.message));
  }

  onLoginFacebook(): void{
    this.authService.loginFacebookUser()
    .then ((res) => {
      this.Redirect();
    }).catch(err => console.log('Error: ', err.message));
  }

  Redirect(): void{
    this.router.navigate(['admin/listado-libros']);
  }

}
