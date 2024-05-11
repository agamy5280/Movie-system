import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeatsComponent } from './components/seats/seats.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MoveisTimesComponent } from './components/moveis-times/moveis-times.component';

const routes: Routes = [
  { path: 'movie', component: MoviePageComponent },
  { path: 'seats', component: SeatsComponent },
  { path: 'times/:id', component: MoveisTimesComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
