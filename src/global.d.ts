declare interface Action {
    type: string
}
declare interface AppStateAction extends Action{
    content: string;
    from: string;
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
declare interface RequestPostReply extends Action {
    movieId: string,
    content: string,
    rating: number,
    token: string
}
declare interface RequestConfirm extends Action {
    username: string
    code: string
}
declare interface RequestSignUp extends Action {
    username: string,
    email: string,
    password: string
}
declare interface RequestSignIn extends Action {
    username: string,
    password: string
}
declare interface SaveLastScrollY extends Action {
    scrollY: number
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
declare interface FetchMovieReplies extends Action {
    replies: Reply[] | null,
    movieId: string
}
declare interface FilterKeyAction extends Action {
    filterKey: string;
}
declare type Rating = {
    Source: string;
    Value: string;
}
declare type Reply = {
    userName: string;
    content: string;
    rating: number;
    createdAt: number;
}
declare type MovieById = {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
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
    Writer: string;
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
declare type authActions= {
    confirmRequest: (username: string, code: string) => RequestConfirm
    getCurrentUser: () => Action
    signInRequest: (username: string, password: string) => RequestSignIn
    signOut: () => Action;
    signUpRequest: (username: string, email: string, password: string) => RequestSignUp;
}
declare type apiActions = {
    requestMovieById: (movieId: string) => RequestMovieById;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch;
    requestMovieByQuery: (searchKey: string) => RequestMovieByQuery;
    requestPostReply: (id: string, content: string, rating: number, token: string,) => RequestPostReply;
}
declare type changeSearchStateActions = {
    deleteFilterKey: (value: string) => Action;
    setFilterKey: (value: string) => FilterKeyAction;
    sortByYear:(value: string) => Action
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
};
