import { Component, ViewChild } from '@angular/core';

import { MovieSearch } from './movie-search';
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies.component';
import { SearchComponent } from './search.component';
import { SearchHistoryComponent } from './search-history.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Reel It In</h1>
        <h3>A punny movie search engine.</h3>
        <movie-search (onSearchResults)="onSearchResultsReceived($event)"></movie-search>
        <search-history (onSearchHistory)="onSearchHistoryReceived($event)"></search-history>
        <movie-search-results [currentMovieSearch]="movieSearch"></movie-search-results>
        `,
    directives: [SearchComponent, MoviesComponent, SearchHistoryComponent],
    providers: [MovieService]
})
export class AppComponent  { 
    private movieSearch: MovieSearch;
    
    @ViewChild(SearchHistoryComponent)
    private searchHistoryComponent: SearchHistoryComponent;
    
    onSearchResultsReceived(movieSearch: MovieSearch) {
        this.movieSearch = movieSearch;
        console.log("Movies received in parent component...");
        
        this.searchHistoryComponent.updateSearchHistory(movieSearch);
    }
    
    onSearchHistoryReceived(movieSearch: MovieSearch) {
        console.log("MovieSearch object received from history");
        this.movieSearch = movieSearch;
    }
}
