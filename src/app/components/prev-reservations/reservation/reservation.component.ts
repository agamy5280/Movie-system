import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  @Input() reservation: any;
  movie: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getShowTimes(this.reservation.id).subscribe({
      next: (data) => {
        this.movie = data;
      },
    });
  }
}
