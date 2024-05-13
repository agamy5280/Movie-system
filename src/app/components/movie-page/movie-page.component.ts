import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'] // Use styleUrls instead of styleUrl
})
export class MoviePageComponent {

  Mdata:any = [];
  movieID:any;
  movieTrailerCode: any = [];
  

  constructor(private sanitizer: DomSanitizer, private route : ActivatedRoute,private movieService: MovieService,
    private router: Router
  ) {
    // =>> url =>> movie/1
   }
  

    ngOnInit(): void{
      this.route.queryParams.subscribe(async(params)=>{
        this.movieID = params['id'];
        (await this.movieService.getMovieByID(this.movieID)).subscribe({
          next: (data: any) => {
            this.Mdata=data;
            this.movieTrailerCode = data.trailer_youtube_link
            console.log(this.movieTrailerCode)
            console.log(this.Mdata)
            
            
          },
        });

      })
    }


    getSafeUrl(url: string): SafeResourceUrl {
    
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } 

    sendParams() {
      this.router.navigate(['/times'], {
        queryParams: { id: this.movieID },
      });
    }

}
