import actionTypes from './actionTypes';
const fetchSuccess = (searchKey: string, total: number, Movies: MovieBySearch[]) => {
    return {
        type: actionTypes.FETCH.FETCH_SUCCESS,
        Movies: Movies,
        searchKey: searchKey,
        total: total,
    };
};
const fetchMovieDetailSuccess = (MovieDetail: MovieById ) => {
    return {
        type: actionTypes.FETCH.FETCH_MOVIE_DETAIL_SUCCESS,
        MovieDetail: MovieDetail
    };
};
const fetchMovieReplies = (replies: Reply[] | null, movieId: string) => {
    return {
        type: actionTypes.FETCH.FETCH_MOVIE_REPLIES,
        replies: replies,
        movieId: movieId
    };
};
const signInSuccess = (identityToken: string, userName: string) => {
    return {
        type: actionTypes.AUTH.SIGN_IN_SUCCESS,
        identityToken: identityToken,
        userName: userName
    };
};
const querySuccess = (searchKey: string, Movies: MovieBySearch) => {
    return {
        type: actionTypes.FETCH.QUERY_SUCCESS,
        Movies: Movies,
        searchKey: searchKey
    };
};
export default {
    fetchMovieDetailSuccess,
    fetchMovieReplies,
    fetchSuccess,
    signInSuccess,
    querySuccess
};