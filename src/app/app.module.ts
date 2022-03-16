import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PasturesComponent } from './pastures/pastures.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { CowDetailComponent } from './cow-detail/cow-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PasturesComponent,
    NavbarComponent,
    AnimalsComponent,
    CowDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
