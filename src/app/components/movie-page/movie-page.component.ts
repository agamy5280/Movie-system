import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'] // Use styleUrls instead of styleUrl
})
export class MoviePageComponent {
  constructor(private sanitizer: DomSanitizer, private route : ActivatedRoute) {
    // const id = this.route.snapshot.params['id'];
    // =>> url =>> movie/1
   }
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  } 
}
