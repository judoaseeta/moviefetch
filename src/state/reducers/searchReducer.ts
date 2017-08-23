import actionTypes from '../actions/actionTypes';
const enum Enum {
    NonSort,
    SortByAscYear,
    SortByDescYear
}
export type State = {
    Movies:  { 
        [key: string]: MoviesContainer 
    }
    currentSearchKey: string;
    searchKeys: Set<string>;
    failure: string;
};
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
        if ( howSorted === Enum.SortByAscYear && this.Movies.length !== 0) {
            this.MoviesByAsc =  this.sortByAsc(this.Movies);
            this.sorted = howSorted;
        } else if ( howSorted === Enum.SortByDescYear && this.Movies.length !== 0) {
            this.MoviesByDesc = this.sortByDesc(this.Movies);
            this.sorted = howSorted;
        }
        this.Movies = this.sortByNone(this.Movies);
        this.sorted = howSorted;
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
        if (this.sorted === Enum.NonSort) {
            this.Movies = this.Movies.concat(Movies);
        } else if (this.sorted === Enum.SortByAscYear) {
            this.Movies = this.Movies.concat(Movies);
            this.MoviesByAsc = this.sortByAsc(this.Movies);
        } else {
            this.Movies = this.Movies.concat(Movies);
            this.MoviesByDesc = this.sortByDesc(this.Movies);
        }
    }
    increasePage(): void {
        this.currentPage++;
    }
    setTotalPage(): void {
        this.totalPage = Math.round(this.totalNum / 10) + 1;
    }
    sortByAsc(movies: MovieBySearch[]): MovieBySearch[] {
        let emptyMovies: MovieBySearch[] = [];
        return emptyMovies.concat(movies.sort((a, b) => b.Year - a.Year));
    }
    sortByDesc(movies: MovieBySearch[]): MovieBySearch[] {
        let emptyMovies: MovieBySearch[] = [];
        return emptyMovies.concat(movies.sort((a, b) => a.Year - b.Year));
    }
    sortByNone(movies: MovieBySearch[]): MovieBySearch[] {
        let emptyMovies: MovieBySearch[] = [];
        return emptyMovies.concat(movies);
    }
}
const initialState = {
    Movies: {},
    currentSearchKey: '',
    failure: '',
    searchKeys: new Set(),
};
const searchReducer = (state: State = initialState, action: FetchMovieBySearch) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_SUCCESS:
        if (!state.searchKeys.has(action.searchKey)) {
            return {
                ...state,
                currentSearchKey: action.searchKey,
                searchKeys: state.searchKeys.add(action.searchKey),
                Movies: {...state.Movies, [action.searchKey]: makeNewMovie(action)}
            };
            
        }
        if ((action.searchKey === state.currentSearchKey) && state.searchKeys.has(action.searchKey)) {
            state.Movies[state.currentSearchKey].setMovies(action.Movies);
            return {
                ...state,
                Movies: {...state.Movies }
            };
        }
        return state;
        case actionTypes.FETCH.FETCH_FAIL:
            return {
                ...initialState,
                failure: 'Something was wrong'
            };
        case actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE:
            return {
                ...state,
                currentSearchKey: action.searchKey
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_NONE:
            state.Movies[state.currentSearchKey].changeSorted(Enum.NonSort);
            return {
                ...state,
                Movies: {...state.Movies }
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_ASC:
        state.Movies[state.currentSearchKey].changeSorted(Enum.SortByAscYear);
        return {
            ...state,
            Movies: {...state.Movies } 
        };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_DESC:
        state.Movies[state.currentSearchKey].changeSorted(Enum.SortByDescYear);
        return {
            ...state,
            Movies: {...state.Movies }
        };
        default: return state;
    }
};
function makeNewMovie(action: FetchMovieBySearch): MoviesContainer {
    return new MoviesContainer(action.Movies, action.total);
}
export default searchReducer;