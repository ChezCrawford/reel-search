import { Movie } from './movie';

export class MovieSearch {
    movies: Array<Movie>;
    totalResults: number;
    currentPage: number;
    searchString: string;
    
    constructor(searchString: string) {
        this.searchString = searchString;
        this.totalResults = 0;
    }
}