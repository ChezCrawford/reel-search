import { Component, Input } from '@angular/core';

import { Movie } from './movie'
import { MovieDetailComponent } from './movie-detail.component'

@Component({
    selector: 'movie-search-results',
    styleUrls: ['app/movies.component.css'],
    templateUrl: 'app/movies.component.html',
    directives: [MovieDetailComponent]
})
export class MoviesComponent {
    @Input()
    movies: Movie[];
    
    selectedMovie: Movie;
    
    constructor() { }
    
    onSelect(movie: Movie) {
        this.selectedMovie = movie;
    }
}