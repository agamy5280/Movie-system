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
const routes: Routes = [
  { path: 'log-in', component: LoginPageComponent },
  { path: '', component: HomeComponent },
  { path: 'movies', component: HomeComponent },
  { path: 'movie', component: MoviePageComponent },
  {
    path: 'profile',
    component: ProfileEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'seats',
    component: SeatsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':times',
        component: SeatsComponent,
      },
    ],
  },
  { path: 'times', component: MoveisTimesComponent },
  { path: 'log-in', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'soon', component: ComingSoonComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
