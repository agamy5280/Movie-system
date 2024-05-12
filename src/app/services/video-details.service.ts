import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDetailsService {

  constructor(private http: HttpClient) { }

  getVideoDetails(videoUrl: string): Observable<any> {
    // Implement logic to fetch video details using videoUrl
    // For example, make an HTTP GET request to fetch details from YouTube Data API
    return this.http.get<any>('https://your-api-endpoint.com/video-details', { params: { videoUrl } });
  }
}
