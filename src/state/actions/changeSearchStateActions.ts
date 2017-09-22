import actionTypes from './actionTypes';
import { MovieSort } from '../reducers/searchReducer';
const setLastScrollY = (scrollY: number) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.SET_LAST_SCROLLY,
        scrollY: scrollY
    };
};
const requestSwitch = (searchKey: string) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE,
        searchKey: searchKey
    };
};
const sortByYear = (value: string) => {
    switch (value) {
        case 'RECENT': 
        return {
            type: actionTypes.CHANGE_SEARCH_STATE.CHANGE_SORT,
            sort: MovieSort.SORT_BY_ASC
        };
        case 'OLD':
        return {
            type: actionTypes.CHANGE_SEARCH_STATE.CHANGE_SORT,
            sort: MovieSort.SORT_BY_DESC
        };
        case 'NONE-POPULAR':
        return {
            type: actionTypes.CHANGE_SEARCH_STATE.CHANGE_SORT,
            sort: MovieSort.NON_SORT
        };   
        default:
        return {
            type: actionTypes.CHANGE_SEARCH_STATE.CHANGE_SORT,
            sort: MovieSort.NON_SORT
        };
    }
};
export default {
    setLastScrollY,
    sortByYear,
    requestSwitch
};