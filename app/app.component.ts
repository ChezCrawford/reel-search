import { Component } from '@angular/core';

import { MovieSearch } from './movie-search';
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies.component';
import { SearchComponent } from './search.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Reel It In</h1>
        <h3>A punny movie search engine.</h3>
        <movie-search (onSearchResults)="onSearchResultsReceived($event)"></movie-search>
        <movie-search-results [currentMovieSearch]="movieSearch"></movie-search-results>
        `,
    directives: [SearchComponent, MoviesComponent],
    providers: [MovieService]
})
export class AppComponent  { 
    private movieSearch: MovieSearch;
    
    onSearchResultsReceived(movieSearch: MovieSearch) {
        this.movieSearch = movieSearch;
        console.log("Movies received in parent component...");
    }
}
