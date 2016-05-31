import { Component, OnChanges, Input } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'movie-detail',
    styleUrls: ['app/movie-detail.component.css'],
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
            this.movieService.getMovieByImdbIdWithCache(id)
                .then((movie) => {
                    this.movieDetail = movie;
                });
        }
    }
}