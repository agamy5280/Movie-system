import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  allMovies: any;
  constructor(private movieService: MovieService, private router: Router) {}
  ngOnInit() {
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.allMovies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  navigateToMoviePage(id: any): void {
    this.router.navigate(['/movie'], {
      queryParams: { id: id },
    });
  }
}
