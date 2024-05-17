import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.scss',
})
export class SeatsComponent implements OnInit {
  leftSeats: any[][] = [];
  middleSeats: any[][] = [];
  rightSeats: any[][] = [];
  selectedSeats: string[] = [];
  movieID: any;
  movieImg: any;
  movieTime: any;
  movieData: any;
  movieLocation: any;
  movieName: any;
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private movieService: MovieService
  ) {
    this.leftSeats = this.generateSeatData(5, 4);
    this.middleSeats = this.generateSeatData(5, 8);
    this.rightSeats = this.generateSeatData(5, 4);
    // checking if path seats is active.
    if (_router.url == '/seats') {
      this._router.navigate(['movies']);
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.movieID = params['id'];
      this.movieTime = params['time'];
      this.movieLocation = params['location'];
      (await this.movieService.getMovieByID(this.movieID)).subscribe({
        next: (data) => {
          this.movieData = data;
          this.movieImg = data.movie_image;
          this.movieName = data.title;
        },
      });
    });
  }

  generateSeatData(rows: number, seatsPerRow: number): any[][] {
    const seatData: any[][] = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < seatsPerRow; j++) {
        const seatCode = `${i + 1}${String.fromCharCode(65 + j)}`; // Generate Seats codes
        const occupied = Math.random() < 0.3; // Probability of generating occupied seats
        const seat = {
          number: seatCode,
          occupied: occupied,
          selected: false,
        };
        row.push(seat);
      }
      seatData.push(row);
    }
    return seatData;
  }
  seatClicked(seat: any) {
    if (!seat.occupied) {
      seat.selected = !seat.selected; // Toggle selected seat
      const seatCode = seat.number;
      if (seat.selected) {
        this.selectedSeats.push(seatCode);
      } else {
        this.selectedSeats = this.selectedSeats.filter(
          (selectedSeat) => selectedSeat !== seatCode
        ); // Remove from selected seats when unselected (unclicked)
      }
    }
  }
  confirmReservation() {
    this._router.navigate(['/confirm'], {
      queryParams: {
        id: this.movieID,
        title: this.movieName,
        time: this.movieTime,
        location: this.movieLocation,
        seats: this.selectedSeats,
        price: this.calculateTicketPrice(),
      },
    });
  }
  calculateTicketPrice() {
    const selectedCount = this.selectedSeats.length;
    return selectedCount * 100;
  }
}
