import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

//form and HTTP clients : 

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


// firebase imports : 

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";


// for toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
