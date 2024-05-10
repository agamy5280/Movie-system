import { Component } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.scss',
})
export class SeatsComponent {
  leftSeats: any[][] = [];
  middleSeats: any[][] = [];
  rightSeats: any[][] = [];
  selectedSeats: string[] = [];
  constructor() {
    this.leftSeats = this.generateSeatData(5, 4);
    this.middleSeats = this.generateSeatData(5, 8);
    this.rightSeats = this.generateSeatData(5, 4);
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
  showSelectedSeats() {
    console.log(this.selectedSeats);
  }
}
