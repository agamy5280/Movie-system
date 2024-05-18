import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent implements OnInit {
  allMovies: any;
  link: any = 'https://www.youtube.com/embed/er3h_STlp-k';
  constructor(
    private sanitizer: DomSanitizer,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.allMovies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
