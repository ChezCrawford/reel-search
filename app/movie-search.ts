import { Movie } from './movie';

export class MovieSearch {
    movies: Array<Movie>;
    totalResults: number;
    currentPage: number;
    
    constructor() {
        this.totalResults = 0;
    }
}