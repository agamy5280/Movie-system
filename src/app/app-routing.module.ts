import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeatsComponent } from './components/seats/seats.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MoveisTimesComponent } from './components/moveis-times/moveis-times.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { PrevReservationsComponent } from './components/prev-reservations/prev-reservations.component';
import { routingGuard } from './guard/routing-guard.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: HomeComponent },
  { path: 'movie', component: MoviePageComponent, canActivate: [routingGuard] },
  {
    path: 'profile',
    component: ProfileEditComponent,
    canActivate: [AuthGuard, routingGuard],
  },
  {
    path: 'seats',
    component: SeatsComponent,
    canActivate: [AuthGuard, routingGuard],
  },
  {
    path: 'times',
    component: MoveisTimesComponent,
    canActivate: [routingGuard],
  },
  { path: 'log-in', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'soon', component: ComingSoonComponent },
  {
    path: 'confirm',
    component: ConfirmComponent,
    canActivate: [AuthGuard, routingGuard],
  },
  {
    path: 'reservations',
    component: PrevReservationsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
