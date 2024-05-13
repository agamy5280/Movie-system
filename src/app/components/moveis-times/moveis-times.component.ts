import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { switchMap } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-moveis-times',
  templateUrl: './moveis-times.component.html',
  styleUrl: './moveis-times.component.scss',
})
export class MoveisTimesComponent implements OnInit {
  id = 0;
  movieName = '';
  times: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe({
      next: data => this.id = data['id']
    })
  }
  sendParams(time: any, location:any) {
    this.router.navigate(['/seats'], {
      queryParams: { time: time, id: this.id, location:location },
    });
  }


  ngOnInit(): void {
    this.movieService.getShowTimes(this.id).subscribe({
      next: (data) => {
        this.times = data;
        this.movieName = this.times['title'];
        this.times = this.times['show_times'];
      },
      error: (err) => console.log(err),
    });
  }
}
