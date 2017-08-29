import { Enum } from '../state/reducers/searchReducer';
export class MoviesContainer {
    Movies: MovieBySearch[] = [];
    MoviesByAsc: MovieBySearch[] = [];
    MoviesByDesc: MovieBySearch[] = [];
    sorted: Enum = Enum.NonSort;
    currentPage: number = 1;
    totalNum: number;
    totalPage: number = 0;
    constructor(
        Movies: MovieBySearch[],
        totalNum?: number
    ) {
        this.Movies = Movies;
        if (totalNum) {
            this.totalNum = totalNum;
        }
        this.setTotalPage();
    }
    changeSorted(howSorted: Enum) {
        if ( this.Movies.length === 0) {
            this.sorted = howSorted;
        } else {
            switch (howSorted) {
                case Enum.SortByAscYear:
                this.MoviesByAsc =  this.sortByAsc(this.Movies);
                this.sorted = howSorted;
                break;
                case Enum.SortByDescYear:
                this.MoviesByDesc = this.sortByDesc(this.Movies);
                this.sorted = howSorted;
                break;
                default: 
                this.Movies = this.sortByNone(this.Movies);
                this.sorted = howSorted;
                break;
            }
        }
    }
    getMovies(): MovieBySearch[] {
        if (this.sorted === Enum.SortByAscYear) {
            return this.MoviesByAsc;
        } else if (this.sorted === Enum.SortByDescYear) {
            return this.MoviesByDesc;
        }
        return this.Movies;
    }
    setMovies(Movies: MovieBySearch[]): void {
        this.increasePage();
        switch (this.sorted) {
            case Enum.SortByDescYear: 
            this.Movies = this.Movies.concat(Movies);
            this.MoviesByDesc = this.sortByDesc(this.Movies);
            break;
            case Enum.SortByAscYear:
            this.Movies = this.Movies.concat(Movies);
            this.MoviesByAsc = this.sortByAsc(this.Movies);
            break;
            default : 
            this.Movies = this.Movies.concat(Movies);
        }
    }
    private increasePage(): void {
        this.currentPage++;
    }
    private setTotalPage(): void {
        this.totalPage = Math.round(this.totalNum / 10) + 1;
    }
    private sortByAsc(movies: MovieBySearch[]): MovieBySearch[] {
        let emptyMovies: MovieBySearch[] = [];
        return emptyMovies.concat(movies).sort((a, b) => b.Year - a.Year);
    }
    private sortByDesc(movies: MovieBySearch[]): MovieBySearch[] {
        let emptyMovies: MovieBySearch[] = [];
        return emptyMovies.concat(movies).sort((a, b) => a.Year - b.Year);
    }
    private sortByNone(movies: MovieBySearch[]): MovieBySearch[] {
        let emptyMovies: MovieBySearch[] = [];
        return emptyMovies.concat(movies);
    }
}