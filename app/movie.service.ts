import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';
import { MovieSearch } from './movie-search';

@Injectable()
export class MovieService {
    private omdbApiBaseUrl: string = `http://www.omdbapi.com/`;
    private searchCache : { [key:string]:Movie; } = {}
    
    constructor(private http: Http) { }
    
    searchMovies(searchString: string): Promise<MovieSearch> {
        let movieUrl = `${this.omdbApiBaseUrl}?s=${searchString}&type=movie`;
        return this.http.get(movieUrl)
                    .toPromise()
                    .then((response) => {
                        return this.parseSearchResponse(response);
                    })
                    .catch(this.handleError);
    }
    
    getMovieByImdbId(imdbID: string): Promise<Movie> {
        let cachedMovie = this.cacheGet(imdbID);
        if (cachedMovie) {
            return Promise.resolve(cachedMovie);
        }
        else {  
            let movieUrl = `${this.omdbApiBaseUrl}?i=${imdbID}`;
            return this.http.get(movieUrl)
                        .toPromise()
                        .then((response) => response.json())
                        .catch(this.handleError);
        }
    }
    
    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
    
    getMovieByImdbIdWithCache(imdbID: string): Promise<Movie> {
        return this.getMovieByImdbId(imdbID)
                    .then((movie) => {
                        this.cachePut(movie);
                        return movie;
                    });
    }
    
    private parseSearchResponse(response: Response): MovieSearch {
        console.log("Processing response %s", response);
        
        let movieSearch = new MovieSearch();
        if (response.json().Response === "True") {
            movieSearch.totalResults = response.json().totalResults;
            movieSearch.movies = response.json().Search;
        }
        
        return movieSearch;
    }
    
    private cachePut(movie: Movie) {
        let imdbID = movie.imdbID;
        if (this.searchCache[imdbID]) {
        }
        else {
            this.searchCache[imdbID] = movie;
        }
    }
    
    private cacheGet(imdbID: string): Movie {
        let cachedMovie: Movie = null;
        if (this.searchCache[imdbID]) {
            cachedMovie = this.searchCache[imdbID];
        }
        
        return cachedMovie;
    }
}