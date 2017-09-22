import actionTypes from './actionTypes';

const requestMovieById = (Id: string) => {
    return {
        type: actionTypes.API.REQUEST_MOVIE_BY_ID,
        Id: Id
    };
};
const requestMovieBySearch = (searchKey: string, page: number = 1) => {
    return {
        type: actionTypes.API.REQUEST_MOVIE_BY_SEARCH,
        searchKey: searchKey,
        page: page
    };
};
const requestMovieByQuery = (searchKey: string) => {
    return {
        type: actionTypes.API.REQUEST_MOVIE_BY_QUERY,
        searchKey: searchKey
    };
};
export const requestMovieReply = (movieId: string) => {
    return {
        type: actionTypes.API.REQUEST_MOVIE_REPLY,
        movieId: movieId
    };
};
export const requestPostReply = (id: string, content: string, rating: number, token: string) => {
    return {
        type: actionTypes.API.REQUEST_POST_REPLY,
        movieId: id,
        content: content,
        rating: rating,
        token: token,
    };
};
export default {
    requestMovieById,
    requestMovieBySearch,
    requestMovieByQuery,
    requestPostReply
};