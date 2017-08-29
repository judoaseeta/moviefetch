declare interface Action {
    type: string
}
interface ChangeStatusBar extends Action {
    currentY: number,
    maxY: number
}
interface RequestMovieById extends Action {
    Id: string
}
interface RequestMovieBySearch extends Action {
    searchKey: string,
    page: number
}
interface RequestMovieByQuery extends Action {
    searchKey: string
}
interface FetchMovieById extends Action {
    MovieDetail: MovieById
}
interface FetchMovieBySearch extends Action {
    Movies: MovieBySearch[],
    searchKey: string,
    total: number,
    page: number
}
interface FetchMovieByQuery extends Action {
    Movies: MovieBySearch[],
    searchKey: string
}
type Rating = {
    Source: string;
    Value: string;
}
type MovieById = {
    Actors: string[];
    Awards: string;
    BoxOffice: string;
    Country: string[];
    DVD: string;
    Director: string;
    Genre: string[];
    Language: string[];
    Metascore: number;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: Rating[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string[];
    Year: number;
    imdbID: string;
    imdbRating: number;
    imdbVotes: number;
}
type MovieBySearch = {
    Title: string
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}
type apiActions = {
    requestMovieById: (Id: string) => RequestMovieById; 
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch;
    requestMovieByQuery: (searchKey: string) => RequestMovieByQuery;
}
type changeStateActions = {
    changeStatusBar: (currentY:number, maxY: number) => ChangeStatusBar
};
type changeSearchStateActions = {
    sortByAsc:() => Action
    sortByDesc:() => Action
    sortByNone:() => Action
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
};
type ActionList = {
    apiActions: apiActions,
    changeSearchStateActions: changeSearchStateActions
    changeStateActions: changeStateActions
}