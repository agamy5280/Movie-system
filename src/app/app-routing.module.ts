import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeatsComponent } from './components/seats/seats.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MoveisTimesComponent } from './components/moveis-times/moveis-times.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: HomeComponent },
  { path: 'movie/:id', component: MoviePageComponent },
  {
    path: 'seats',
    component: SeatsComponent,
    children: [
      {
        path: ':time/:id',
        component: SeatsComponent,
      },
    ],
  },
  { path: 'times/:id', component: MoveisTimesComponent },
  { path: 'log-in', component: LoginPageComponent },

  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
