const AUTH = {
    GET_CURRENT_USER: 'GET_CURRENT_USER',
    REQUEST_CONFIRM: 'REQUEST_CONFIRM',
    REQUEST_SIGN_IN: 'REQUEST_SIGN_IN',
    REQUEST_SIGN_OUT: 'REQUEST_SIGN_OUT',
    REQUEST_SIGN_UP: 'REQUEST_SIGN_UP',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_OUT: 'SIGN_OUT'
};
const API = {
    REQUEST_MOVIE_BY_ID: 'REQUEST_MOVIE_BY_ID',
    REQUEST_MOVIE_BY_SEARCH: 'REQUEST_MOVIE_BY_SEARCH',
    REQUEST_MOVIE_BY_QUERY: 'REQUEST_MOVIE_BY_QUERY',
    REQUEST_MOVIE_REPLY: 'REQUEST_MOVIE_REPLY',
    REQUEST_POST_REPLY: 'REQUEST_POST_REPLY',
};
const FETCH = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAIL: 'FETCH_FAIL',
    FETCH_MOVIE_DETAIL_SUCCESS: 'FETCH_MOVIE_DETAIL_SUCCESS',
    FETCH_MOVIE_REPLIES: 'FETCH_MOVIE_REPLIES',
    QUERY_SUCCESS: 'QUERY_SUCCESS'
};
const CHANGESTATE = {
    CHANGE_STATUS_BAR: 'CHANGE_STATUS_BAR',
    TOAST_ON: 'TOAST_ON',
    TOAST_OFF: 'TOAST_OFF'
};
const CHANGE_SEARCH_STATE = {
    REQUEST_SWITCH_MOVIE: 'REQUEST_SWITCH_MOVIE',
    IS_SHOWING_DETAIL: 'IS_SHOWING_DETAIL',
    CHANGE_SORT: 'CHANGE_SORT',
    SET_LAST_SCROLLY: 'SET_LAST_SCROLLY'
};
const REPLY = {
    SORT_REPLY: 'SORT_REPLY'
};
export default {
    AUTH,
    API,
    CHANGESTATE,
    CHANGE_SEARCH_STATE,
    FETCH,
    REPLY
};