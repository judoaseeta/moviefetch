import actionTypes from './actionTypes';

const fetchSuccess = (searchKey: string, total: number, Movies: MovieBySearch[]) => {
    return {
        type: actionTypes.FETCH.FETCH_SUCCESS,
        Movies: Movies,
        searchKey: searchKey,
        total: total,
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
    fetchSuccess,
    querySuccess
};