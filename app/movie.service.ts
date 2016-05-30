import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {
    private omdbApiBaseUrl: string = `http://www.omdbapi.com/`

    
    constructor(private http: Http) { }
    
    searchMovies(searchString: string): Promise<Movie[]> {
        let movieUrl = `${this.omdbApiBaseUrl}?s=${searchString}&type=movie`;
        return this.http.get(movieUrl)
                    .toPromise()
                    .then(response => response.json().Search)
                    .catch(this.handleError);
    }
    
    getMovieByImdbId(imdbID: string): Promise<Movie> {
        let movieUrl = `${this.omdbApiBaseUrl}?i=${imdbID}`;
        return this.http.get(movieUrl)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}