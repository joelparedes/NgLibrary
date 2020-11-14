import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app'; //Esta es la forma correcta. Si lo importo con 'firebase' sin el
                                    // '/app' me dara el warning que me estaba saliendo + un error.

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afsAuth: AngularFireAuth ) { }

  registerUser(email: string, password: string){
    return new Promise ((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, password)
      .then (userData => resolve(userData)),
      err => reject(err);
    });
  }

  loginEmailUser(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err))
    });
  }

  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
  }
  loginFacebookUser(){
    console.log("FUNCIONA FACEBOOK!");
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    
  }

  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

}
