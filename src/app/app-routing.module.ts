import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLibrosComponent } from './components/admin/listado-libros/listado-libros.component';
import { DetallesLibroComponent } from './components/detalles-libro/detalles-libro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { Page404Component } from './components/users/page404/page404.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //El orden en que se colocan las rutas al parecer si importa
  { path: 'libro/:id', component: DetallesLibroComponent },
  { path: 'admin/listado-libros', component: ListadoLibrosComponent }, //Solo un usuario puede ver
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent }, //Solo un usuario puede ver
  { path: '**', component: Page404Component }, //Esta es mejor ponerla abajo para que no se este
        // los ** son una especie de catch    //redireccionando a esta por default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
