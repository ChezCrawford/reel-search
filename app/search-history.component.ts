import { Component, Output, EventEmitter } from '@angular/core';

import { MovieSearch } from './movie-search'

@Component({
    selector: 'search-history',
    styleUrls: ['app/search-history.component.css'],
    templateUrl: 'app/search-history.component.html',
})
export class SearchHistoryComponent {
    movieSearches: MovieSearch[];
    
    @Output() 
    onSearchHistory = new EventEmitter<MovieSearch>();
    
    constructor() {
        this.movieSearches = new Array<MovieSearch>();
    }
    
    updateSearchHistory(movieSearch: MovieSearch) {
        this.movieSearches.push(movieSearch);
        console.log("There are now %d items in the search history.", this.movieSearches.length);
    }
    
    onHistorySelect(movieSearch: MovieSearch) {
        console.log("Click detected:", movieSearch);
        this.onSearchHistory.emit(movieSearch)
    }
}