import { Component, OnChanges, Input } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'movie-detail',
    templateUrl: 'app/movie-detail.component.html'
})
export class MovieDetailComponent implements OnChanges {
    @Input()
    movie: Movie;
    movieDetail: Movie;

    constructor(private movieService: MovieService) { }

    ngOnChanges() {
        if (this.movie) {
            let id = this.movie.imdbID;
            this.movieService.getMovieByImdbId(id)
                .then((movie) => {
                    console.log("Got something!", movie);
                    this.movieDetail = movie;
                });
        }
    }
}