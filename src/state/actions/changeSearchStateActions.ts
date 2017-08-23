import actionTypes from './actionTypes';
const requestSwitch = (searchKey: string) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE,
        searchKey: searchKey
    };
};
const sortByAsc = () => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.SORT_BY_ASC
    };
};
const sortByDesc = () => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.SORT_BY_DESC
    };
};
const sortByNone = () => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.SORT_BY_NONE
    };
};
export default {
    sortByAsc,
    sortByDesc,
    sortByNone,
    requestSwitch
};