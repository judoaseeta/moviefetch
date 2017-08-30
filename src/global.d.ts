declare interface Action {
    type: string
}
declare interface ChangeStatusBar extends Action {
    currentY: number,
    maxY: number
}
declare interface RequestMovieById extends Action {
    Id: string
}
declare interface RequestMovieBySearch extends Action {
    searchKey: string,
    page: number
}
declare interface RequestMovieByQuery extends Action {
    searchKey: string
}
declare interface FetchMovieById extends Action {
    MovieDetail: MovieById
}
declare interface FetchMovieBySearch extends Action {
    Movies: MovieBySearch[],
    searchKey: string,
    total: number,
    page: number
}
declare interface FetchMovieByQuery extends Action {
    Movies: MovieBySearch[],
    searchKey: string
}
declare type Rating = {
    Source: string;
    Value: string;
}
declare type MovieById = {
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
declare type MovieBySearch = {
    Title: string
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}
declare type apiActions = {
    requestMovieById: (Id: string) => RequestMovieById; 
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch;
    requestMovieByQuery: (searchKey: string) => RequestMovieByQuery;
}
declare type changeStateActions = {
    changeStatusBar: (currentY:number, maxY: number) => ChangeStatusBar
};
declare type changeSearchStateActions = {
    sortByAsc:() => Action
    sortByDesc:() => Action
    sortByNone:() => Action
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
};
declare type ActionList = {
    apiActions: apiActions,
    changeSearchStateActions: changeSearchStateActions
    changeStateActions: changeStateActions
}