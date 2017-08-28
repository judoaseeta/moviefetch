import actionTypes from './actionTypes';

const fetchSuccess = (searchKey: string, total: number, Movies: MovieBySearch[]) => {
    return {
        type: actionTypes.FETCH.FETCH_SUCCESS,
        Movies: Movies,
        searchKey: searchKey,
        total: total,
    };
};
const fetchMovieDetailSuccess = (MovieDetail: MovieById) => {
    return {
        type: actionTypes.FETCH.FETCH_MOVIE_DETAIL_SUCCESS,
        MovieDetail: MovieDetail
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
    fetchSuccess,
    querySuccess
};