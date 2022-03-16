import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { CowDetailComponent } from './cow-detail/cow-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasturesComponent } from './pastures/pastures.component';

const routes: Routes = [
  {path:'' , component: LoginComponent} ,
  {path: 'home', component: HomeComponent} ,
  {path: 'pastures', component: PasturesComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'detail/:id', component: CowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
