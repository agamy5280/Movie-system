import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly DB_LINK: string;
  constructor(private http: HttpClient) {
    this.DB_LINK = 'http://localhost:3000/movies';
  }
  getShowTimes(id: number) {
    return this.http.get(this.DB_LINK + '/' + id);
  }
  getAllMovies() {
    return this.http.get(this.DB_LINK);
  }
  async getMovieByID(id: any) {
    return this.http.get(this.DB_LINK).pipe(
      map((data: any) => {
        return data.find((movies: { id: any }) => movies.id === id); // Return whole movie Detail based on ID
      })
    );
  }
  
}
