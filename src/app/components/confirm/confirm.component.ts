import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
})
export class ConfirmComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('userData')!);
  movieDetails: any;
  r_user: any;
  past_res: any;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.movieDetails = params;
      this.userService.getUsersByid(this.user.id).subscribe({
        next: (data) => {
          this.r_user = data;

          this.past_res = this.r_user['past-reservation'];
          this.past_res.push(this.movieDetails);
          this.r_user['past-reservation'] = this.past_res;
        },
        error: (err) => {
          console.log('error');
        },
      });
    });
  }

  onClose() {
    //fn -> getPastrev []
    //[newRes]
    //arr.push(...getPastrev, ...newRes)

    console.log(this.past_res);

    this.userService
      .updateObjectById(this.user.id, this.r_user)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
