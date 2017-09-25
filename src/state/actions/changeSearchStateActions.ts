import actionTypes from './actionTypes';
import { MovieSort } from '../reducers/searchReducer';
const setFilterKey = (filterKey: string) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.SET_FILTER_KEY,
        filterKey
    };
};
const deleteFilterKey = (filterkey: string) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.DEL_FILTER_KEY
    };
};
    
const setLastScrollY = (scrollY: number) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.SET_LAST_SCROLLY,
        scrollY
    };
};
const requestSwitch = (searchKey: string) => {
    return {
        type: actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE,
        searchKey
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
    deleteFilterKey,
    setFilterKey,
    setLastScrollY,
    sortByYear,
    requestSwitch
};