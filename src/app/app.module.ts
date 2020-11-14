import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoLibrosComponent } from './components/admin/listado-libros/listado-libros.component';
import { DetallesLibroComponent } from './components/detalles-libro/detalles-libro.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/users/page404/page404.component';
import { ProfileComponent } from './components/users/profile/profile.component';

import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

//Para subir imagenes
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { TruncatePipe } from './Pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoLibrosComponent,
    DetallesLibroComponent,
    HomeComponent,
    HeroComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    ProfileComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //Conexion con firebase
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
