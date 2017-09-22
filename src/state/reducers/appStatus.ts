import actionTypes from '../actions/actionTypes';
export type State = {
    isFetching: boolean,
    isToastOn: boolean,
    toastContent: string;
    toastFrom: string;
};
const initialState = {
    isFetching: false,
    isToastOn: false,
    toastContent: '',
    toastFrom: ''
};
const appStatus = (state: State = initialState, action: AppStateAction) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_START:
            return {...state, isFetching: true};
        case actionTypes.FETCH.FETCH_END:
            return {...state, isFetching: false};
        case actionTypes.CHANGESTATE.TOAST_ON:
            return {
                ...state, 
                isToastOn: true, 
                toastContent: action.content,
                toastFrom: action.from
            };
        case actionTypes.CHANGESTATE.TOAST_OFF: 
            return {
                ...state,
                isToastOn: false,
                toastContent: '',
                toastFrom: ''
            };
        default: return state;
    }
};
export default appStatus;