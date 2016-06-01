import { Component, Input } from '@angular/core';

import { Movie } from './movie'
import { MovieSearch } from './movie-search'
import { MovieDetailComponent } from './movie-detail.component'

@Component({
    selector: 'movie-search-results',
    styleUrls: ['app/movies.component.css'],
    templateUrl: 'app/movies.component.html',
    directives: [MovieDetailComponent]
})
export class MoviesComponent {
    @Input()
    currentMovieSearch: MovieSearch;
    selectedMovie: Movie;
    
    constructor() { }
    
    onSelect(movie: Movie) {
        this.selectedMovie = movie;
    }
}