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
const routes: Routes = [
  { path: 'log-in', component: LoginPageComponent },
  { path: '', component: HomeComponent },
  { path: 'movies', component: HomeComponent, },
  { path: 'movie', component: MoviePageComponent },
  { path: 'profile/:id', component: ProfileEditComponent },
  {
    path: 'seats',
    component: SeatsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':time/:id',
        component: SeatsComponent,
      },
    ],
  },
  { path: 'times/:id', component: MoveisTimesComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
