import { Component, EventEmitter, Output } from '@angular/core';

import { Movie } from './movie'
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies.component';

@Component({
    selector: 'movie-search',
    template: `
    <input #searchBox
    (keyup.enter)="performSearch(searchBox.value)">
    <button (click)="performSearch(searchBox.value)">Search</button>
    `
})
export class SearchComponent {
    movies: Movie[];  
    @Output() onSearchResults = new EventEmitter<Movie[]>();

    constructor(private movieService: MovieService) { }
    
    private performSearch(searchString: string) {
        this.movieService.searchMovies(searchString)
             .then((movies) => {
                this.movies = movies;
                this.onSearchResults.emit(movies);
             });
    } 
}