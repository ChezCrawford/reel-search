import { Component, EventEmitter, Output } from '@angular/core';

import { MovieSearch } from './movie-search'
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies.component';

@Component({
    selector: 'movie-search',
    styleUrls: ['app/search.component.css'],
    template: `
    <input #searchBox
    (keyup.enter)="performSearch(searchBox.value)">
    <button (click)="performSearch(searchBox.value)">Search</button>
    `
})
export class SearchComponent {
    @Output() onSearchResults = new EventEmitter<MovieSearch>();

    constructor(private movieService: MovieService) { }
    
    private performSearch(searchString: string) {
        this.movieService.searchMovies(searchString)
             .then((movieSearch) => {
                this.onSearchResults.emit(movieSearch);
             });
    } 
}