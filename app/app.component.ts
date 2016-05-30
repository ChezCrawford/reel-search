import { Component } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies.component';
import { SearchComponent } from './search.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Reel It In</h1>
        <h3>A punny movie search engine.</h3>
        <movie-search (onSearchResults)="onSearchResultsReceived($event)"></movie-search>
        <movie-search-results [movies]="movies"></movie-search-results>
        `,
    directives: [SearchComponent, MoviesComponent],
    providers: [MovieService]
})
export class AppComponent  { 
    private movies: Movie[];
    
    onSearchResultsReceived(movies: Movie[]) {
        this.movies = movies;
        console.log("Movies received in parent component...");
    }
}
