import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService, private storageImg: AngularFireStorage) { }

  //public nombre: string = '';
  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onUpload(e){
    //console.log('subir', e.target.files[0]); //de esta forma accedo al array *objeto* que estoy subiendo. **ver en el console**

    //Para asegurarnos que no se suban archivos con el mismo nombre crearemos un nombre(string) aleatorio para cada foto (archivo) subido
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storageImg.ref(filePath);
    const task = this.storageImg.upload(filePath, file);

  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.Redirect();
    }).catch(err => console.log('Error: ', err.message));
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
