import { SerieGuard } from './serie.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { UpdateSerieComponent } from './update-serie/update-serie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: "series", component : SeriesComponent},
  {path: "add-serie", component : AddSerieComponent,canActivate:[SerieGuard]},
  {path: "updateSerie/:id", component: UpdateSerieComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeTypes", component : ListeTypesComponent},
  {path: "listeUsers",component : ListeUsersComponent},
  {path: "updateUser/:id", component: UpdateUserComponent},
  {path: "creer-user", component : AddUserComponent,canActivate:[SerieGuard]},
  {path: 'register', component: RegisterComponent},
  {path: "", redirectTo: "series", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
