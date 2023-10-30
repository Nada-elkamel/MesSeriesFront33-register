import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { FormsModule } from '@angular/forms';
import { UpdateSerieComponent } from './update-serie/update-serie.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { TokenInterceptor } from './services/token.interceptor';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    AddSerieComponent,
    UpdateSerieComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParTypeComponent,
    RechercheParNomComponent,
    ListeTypesComponent,
    ListeTypesComponent,
    UpdateTypeComponent,
    ListeUsersComponent,
    UpdateUserComponent,
    AddUserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
