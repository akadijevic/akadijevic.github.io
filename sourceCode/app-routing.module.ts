import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TournamentComponent } from './tournament/tournament.component';


const routes: Routes = [

  {
    path:'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  { 
    path:'gallery',
    component: GalleryComponent, canActivate: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
  path:'statistics',
  component: StatisticsComponent,canActivate: [AuthGuard]
  },
  
  {
    path:'tournament',
    component: TournamentComponent
  },

  {
    path:'',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
