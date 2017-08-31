const AUTH = {
    REQUEST_CONFIRM: 'REQUEST_CONFIRM',
    REQUEST_SIGN_IN: 'REQUEST_SIGN_IN',
    REQUEST_SIGN_UP: 'REQUEST_SIGN_UP',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_OUT: 'SIGN_OUT'
};
const API = {
    REQUEST_MOVIE_BY_ID: 'REQUEST_MOVIE_BY_ID',
    REQUEST_MOVIE_BY_SEARCH: 'REQUEST_MOVIE_BY_SEARCH',
    REQUEST_MOVIE_BY_QUERY: 'REQUEST_MOVIE_BY_QUERY',
};
const FETCH = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAIL: 'FETCH_FAIL',
    FETCH_MOVIE_DETAIL_SUCCESS: 'FETCH_MOVIE_DETAIL_SUCCESS',
    QUERY_SUCCESS: 'QUERY_SUCCESS'
};
const CHANGESTATE = {
    CHANGE_STATUS_BAR: 'CHANGE_STATUS_BAR'
};
const CHANGE_SEARCH_STATE = {
    REQUEST_SWITCH_MOVIE: 'REQUEST_SWITCH_MOVIE',
    IS_SHOWING_DETAIL: 'IS_SHOWING_DETAIL',
    SORT_BY_ASC:  'SORT_BY_ASC',
    SORT_BY_DESC: 'SORT_BY_DESC',
    SORT_BY_NONE: 'SORT_BY_NONE',
};
export default {
    AUTH,
    API,
    CHANGESTATE,
    CHANGE_SEARCH_STATE,
    FETCH
};