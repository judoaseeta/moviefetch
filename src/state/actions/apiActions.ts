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

export default {
    requestMovieById,
    requestMovieBySearch,
    requestMovieByQuery,
};