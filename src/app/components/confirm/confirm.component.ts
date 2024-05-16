import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent implements OnInit {
  @Input() message: string = ''; // To receive the pop-up message content
  @Input() showPopUp: boolean = true; // To control pop-up visibility
  user: any = null; // Initialize user data as null to avoid errors

  constructor(private server: UsersService, private router: Router) {}

  ngOnInit(): void {
    if (!this.message) { // Check if message is provided, otherwise fetch data
      this.server.getUsersByid(1).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => console.log(err),
      });
    }
  }

  onClose() {
    // Emit an event to notify the parent component (optional)
    this.showPopUp = false; // Hide the pop-up
    this.router.navigate(['/']);       


  }
}