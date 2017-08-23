import actionTypes from '../actions/actionTypes';
export type State = {
    isFetching: boolean,
    isQuerying: boolean,
    currentY: number,
    maxY: number
};
const initialState = {
    isFetching: false,
    isQuerying: false,
    currentY: 0,
    maxY: 0
};
const appStatus = (state: State = initialState, action: ChangeStatusBar) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_START:
            return {...state, isFetching: true};
        case actionTypes.FETCH.FETCH_END:
            return {...state, isFetching: false};    
        case actionTypes.API.REQUEST_MOVIE_BY_QUERY:
            return {...state, isQuerying: true};
        case actionTypes.CHANGESTATE.CHANGE_STATUS_BAR:
            return {...state, currentY: action.currentY, maxY: action.maxY };
        default: return state;
    }
};
export default appStatus;